/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import chalk = require('chalk');
import CopyWebpackPlugin from 'copy-webpack-plugin';
import fs from 'fs-extra';
import path from 'path';
import ReactLoadableSSRAddon from 'react-loadable-ssr-addon';
import {Configuration, Plugin} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import {STATIC_DIR_NAME} from '../constants';
import {load} from '../server';
import {handleBrokenLinks} from '../server/brokenLinks';

import {BuildCLIOptions, Props} from '@docusaurus/types';
import createClientConfig from '../webpack/client';
import createServerConfig from '../webpack/server';
import {compile, applyConfigureWebpack} from '../webpack/utils';
import CleanWebpackPlugin from '../webpack/plugins/CleanWebpackPlugin';

export default async function build(
  siteDir: string,
  cliOptions: Partial<BuildCLIOptions> = {},
  forceTerminate: boolean = true,
): Promise<string> {
  process.env.BABEL_ENV = 'production';
  process.env.NODE_ENV = 'production';
  console.log(chalk.blue('Creating an optimized production build...'));

  const props: Props = await load(siteDir, cliOptions.outDir);

  // Apply user webpack config.
  const {
    outDir,
    generatedFilesDir,
    plugins,
    siteConfig: {baseUrl, onBrokenLinks},
    routes,
  } = props;

  const clientManifestPath = path.join(
    generatedFilesDir,
    'client-manifest.json',
  );
  let clientConfig: Configuration = merge(
    createClientConfig(props, cliOptions.minify),
    {
      plugins: [
        // Remove/clean build folders before building bundles.
        new CleanWebpackPlugin({verbose: false}),
        // Visualize size of webpack output files with an interactive zoomable treemap.
        cliOptions.bundleAnalyzer && new BundleAnalyzerPlugin(),
        // Generate client manifests file that will be used for server bundle.
        new ReactLoadableSSRAddon({
          filename: clientManifestPath,
        }),
      ].filter(Boolean) as Plugin[],
    },
  );

  const allCollectedLinks: Record<string, string[]> = {};

  let serverConfig: Configuration = createServerConfig({
    props,
    onLinksCollected: (staticPagePath, links) => {
      allCollectedLinks[staticPagePath] = links;
    },
  });

  const staticDir = path.resolve(siteDir, STATIC_DIR_NAME);
  if (fs.existsSync(staticDir)) {
    serverConfig = merge(serverConfig, {
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: staticDir,
              to: outDir,
            },
          ],
        }),
      ],
    });
  }

  // Plugin Lifecycle - configureWebpack.
  plugins.forEach((plugin) => {
    const {configureWebpack} = plugin;
    if (!configureWebpack) {
      return;
    }

    clientConfig = applyConfigureWebpack(
      configureWebpack.bind(plugin), // The plugin lifecycle may reference `this`.
      clientConfig,
      false,
    );

    serverConfig = applyConfigureWebpack(
      configureWebpack.bind(plugin), // The plugin lifecycle may reference `this`.
      serverConfig,
      true,
    );
  });

  // Make sure generated client-manifest is cleaned first so we don't reuse
  // the one from previous builds.
  if (fs.existsSync(clientManifestPath)) {
    fs.unlinkSync(clientManifestPath);
  }

  // Run webpack to build JS bundle (client) and static html files (server).
  await compile([clientConfig, serverConfig]);

  // Remove server.bundle.js because it is not needed.
  if (
    serverConfig.output &&
    serverConfig.output.filename &&
    typeof serverConfig.output.filename === 'string'
  ) {
    const serverBundle = path.join(outDir, serverConfig.output.filename);
    fs.pathExists(serverBundle).then((exist) => {
      if (exist) {
        fs.unlink(serverBundle);
      }
    });
  }

  // Plugin Lifecycle - postBuild.
  await Promise.all(
    plugins.map(async (plugin) => {
      if (!plugin.postBuild) {
        return;
      }
      await plugin.postBuild(props);
    }),
  );

  await handleBrokenLinks({
    allCollectedLinks,
    routes,
    onBrokenLinks,
    outDir,
    baseUrl,
  });

  const relativeDir = path.relative(process.cwd(), outDir);
  console.log(
    `\n${chalk.green('Success!')} Generated static files in ${chalk.cyan(
      relativeDir,
    )}. Use ${chalk.greenBright(
      '`npm run serve`',
    )} to test your build locally.\n`,
  );
  if (forceTerminate && !cliOptions.bundleAnalyzer) {
    process.exit(0);
  }

  return outDir;
}
