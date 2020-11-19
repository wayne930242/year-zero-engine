/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import env from 'std-env';
import merge from 'webpack-merge';
import webpack, {Configuration, Loader, RuleSetRule, Stats} from 'webpack';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import chalk from 'chalk';
import {TransformOptions} from '@babel/core';
import {ConfigureWebpackFn} from '@docusaurus/types';
import {version as cacheLoaderVersion} from 'cache-loader/package.json';
import {STATIC_ASSETS_DIR_NAME} from '../constants';

// Utility method to get style loaders
export function getStyleLoaders(
  isServer: boolean,
  cssOptions: {
    [key: string]: unknown;
  } = {},
): Loader[] {
  if (isServer) {
    return [
      cssOptions.modules
        ? {
            loader: require.resolve('css-loader'),
            options: cssOptions,
          }
        : require.resolve('null-loader'),
    ];
  }

  const isProd = process.env.NODE_ENV === 'production';
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: !isProd,
      },
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  return loaders;
}

export function getCacheLoader(
  isServer: boolean,
  cacheOptions?: {[key: string]: unknown},
): Loader | null {
  if (env.ci || env.test) {
    return null;
  }

  return {
    loader: require.resolve('cache-loader'),
    options: {
      cacheIdentifier: `cache-loader:${cacheLoaderVersion}${isServer}`,
      ...cacheOptions,
    },
  };
}

export function getBabelLoader(
  isServer: boolean,
  babelOptions?: TransformOptions | string,
): Loader {
  let options: TransformOptions;
  if (typeof babelOptions === 'string') {
    options = {
      babelrc: false,
      configFile: babelOptions,
      caller: {name: isServer ? 'server' : 'client'},
    };
  } else {
    options = Object.assign(
      babelOptions ?? {presets: [require.resolve('../babel/preset')]},
      {
        babelrc: false,
        configFile: false,
        caller: {name: isServer ? 'server' : 'client'},
      },
    );
  }
  return {
    loader: require.resolve('babel-loader'),
    options,
  };
}

/**
 * Helper function to modify webpack config
 * @param configureWebpack a webpack config or a function to modify config
 * @param config initial webpack config
 * @param isServer indicates if this is a server webpack configuration
 * @returns final/ modified webpack config
 */
export function applyConfigureWebpack(
  configureWebpack: ConfigureWebpackFn,
  config: Configuration,
  isServer: boolean,
): Configuration {
  // Export some utility functions
  const utils = {
    getStyleLoaders,
    getCacheLoader,
    getBabelLoader,
  };
  if (typeof configureWebpack === 'function') {
    const {mergeStrategy, ...res} = configureWebpack(config, isServer, utils);
    if (res && typeof res === 'object') {
      return merge.strategy(mergeStrategy ?? {})(config, res);
    }
  }
  return config;
}

// See https://webpack.js.org/configuration/stats/#statswarningsfilter
// @slorber: note sure why we have to re-implement this logic
// just know that legacy had this only partially implemented, so completed it
type WarningFilter = string | RegExp | Function;
function filterWarnings(
  warningsFilter: WarningFilter[],
  warnings: string[],
): string[] {
  function isWarningFiltered(warning: string): boolean {
    return warningsFilter.some((warningFilter) => {
      if (typeof warningFilter === 'string') {
        return warning.includes(warningFilter);
      } else if (warningFilter instanceof RegExp) {
        return !!warning.match(warningFilter);
      } else if (warningFilter instanceof Function) {
        return warningFilter(warning);
      } else {
        throw new Error(`Unknown warningFilter type = ${typeof warningFilter}`);
      }
    });
  }

  return warnings.filter((warning) => !isWarningFiltered(warning));
}

export function compile(config: Configuration[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config);
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      }
      if (stats.hasErrors()) {
        stats.toJson('errors-only').errors.forEach((e) => {
          console.error(e);
        });
        reject(new Error('Failed to compile with errors.'));
      }
      if (stats.hasWarnings()) {
        // Custom filtering warnings (see https://github.com/webpack/webpack/issues/7841).
        let {warnings} = stats.toJson('errors-warnings');

        const warningsFilter = ((config[0].stats as Stats.ToJsonOptionsObject)
          ?.warningsFilter || []) as WarningFilter[];

        if (Array.isArray(warningsFilter)) {
          warnings = filterWarnings(warningsFilter, warnings);
        }

        warnings.forEach((warning) => {
          console.warn(warning);
        });
      }
      resolve();
    });
  });
}

type AssetFolder = 'images' | 'files' | 'medias';

// Inspired by https://github.com/gatsbyjs/gatsby/blob/8e6e021014da310b9cc7d02e58c9b3efe938c665/packages/gatsby/src/utils/webpack-utils.ts#L447
export function getFileLoaderUtils() {
  // files/images < 10kb will be inlined as base64 strings directly in the html
  const urlLoaderLimit = 10000;

  // defines the path/pattern of the assets handled by webpack
  const fileLoaderFileName = (folder: AssetFolder) =>
    `${STATIC_ASSETS_DIR_NAME}/${folder}/[name]-[hash].[ext]`;

  const loaders = {
    file: (options: {folder: AssetFolder}) => {
      return {
        loader: require.resolve(`file-loader`),
        options: {
          name: fileLoaderFileName(options.folder),
        },
      };
    },
    url: (options: {folder: AssetFolder}) => {
      return {
        loader: require.resolve(`url-loader`),
        options: {
          limit: urlLoaderLimit,
          name: fileLoaderFileName(options.folder),
          fallback: require.resolve(`file-loader`),
        },
      };
    },

    // TODO find a better solution to avoid conflicts with the ideal-image plugin
    // TODO this may require a little breaking change for ideal-image users?
    // Maybe with the ideal image plugin, all md images should be "ideal"?
    // This is used to force url-loader+file-loader on markdown images
    // https://webpack.js.org/concepts/loaders/#inline
    inlineMarkdownImageFileLoader: `!url-loader?limit=${urlLoaderLimit}&name=${fileLoaderFileName(
      'images',
    )}&fallback=file-loader!`,
    inlineMarkdownLinkFileLoader: `!file-loader?name=${fileLoaderFileName(
      'files',
    )}!`,
  };

  const rules = {
    /**
     * Loads image assets, inlines images via a data URI if they are below
     * the size threshold
     */
    images: (): RuleSetRule => {
      return {
        use: [loaders.url({folder: 'images'})],
        test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
      };
    },

    /**
     * Loads audio and video and inlines them via a data URI if they are below
     * the size threshold
     */
    media: (): RuleSetRule => {
      return {
        use: [loaders.url({folder: 'medias'})],
        test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/,
      };
    },

    otherAssets: (): RuleSetRule => {
      return {
        use: [loaders.file({folder: 'files'})],
        test: /\.(pdf|doc|docx|xls|xlsx|zip|rar)$/,
      };
    },
  };

  return {loaders, rules};
}

// Ensure the certificate and key provided are valid and if not
// throw an easy to debug error
function validateKeyAndCerts({cert, key, keyFile, crtFile}) {
  let encrypted;
  try {
    // publicEncrypt will throw an error with an invalid cert
    encrypted = crypto.publicEncrypt(cert, Buffer.from('test'));
  } catch (err) {
    throw new Error(
      `The certificate "${chalk.yellow(crtFile)}" is invalid.\n${err.message}`,
    );
  }

  try {
    // privateDecrypt will throw an error with an invalid key
    crypto.privateDecrypt(key, encrypted);
  } catch (err) {
    throw new Error(
      `The certificate key "${chalk.yellow(keyFile)}" is invalid.\n${
        err.message
      }`,
    );
  }
}

// Read file and throw an error if it doesn't exist
function readEnvFile(file, type) {
  if (!fs.existsSync(file)) {
    throw new Error(
      `You specified ${chalk.cyan(
        type,
      )} in your env, but the file "${chalk.yellow(file)}" can't be found.`,
    );
  }
  return fs.readFileSync(file);
}

const appDirectory = fs.realpathSync(process.cwd());
// Get the https config
// Return cert files if provided in env, otherwise just true or false
export function getHttpsConfig(): boolean | {cert: Buffer; key: Buffer} {
  const {SSL_CRT_FILE, SSL_KEY_FILE, HTTPS} = process.env;
  const isHttps = HTTPS === 'true';

  if (isHttps && SSL_CRT_FILE && SSL_KEY_FILE) {
    const crtFile = path.resolve(appDirectory, SSL_CRT_FILE);
    const keyFile = path.resolve(appDirectory, SSL_KEY_FILE);
    const config = {
      cert: readEnvFile(crtFile, 'SSL_CRT_FILE'),
      key: readEnvFile(keyFile, 'SSL_KEY_FILE'),
    };

    validateKeyAndCerts({...config, keyFile, crtFile});
    return config;
  }
  return isHttps;
}
