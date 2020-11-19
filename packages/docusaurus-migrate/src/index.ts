/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fs from 'fs-extra';
import importFresh from 'import-fresh';
import chalk from 'chalk';
import glob from 'glob';
import Color from 'color';

import {
  VersionOneConfig,
  VersionTwoConfig,
  ClassicPresetEntries,
  SidebarEntries,
} from './types';
import extractMetadata, {shouldQuotifyFrontMatter} from './frontMatter';
import migratePage from './transform';
import sanitizeMD from './sanitizeMD';
import path from 'path';

const DOCUSAURUS_VERSION = (importFresh('../package.json') as {version: string})
  .version;

export function walk(dir: string): Array<string> {
  let results: Array<string> = [];
  const list = fs.readdirSync(dir);
  list.forEach((file: string) => {
    const fullPath = `${dir}/${file}`;
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

function sanitizedFileContent(
  content: string,
  migrateMDFiles: boolean,
): string {
  const extractedData = extractMetadata(content);
  const extractedMetaData = Object.entries(extractedData.metadata).reduce(
    (metaData, [key, value]) => {
      return `${metaData}\n${key}: ${
        shouldQuotifyFrontMatter([key, value]) ? `"${value}"` : value
      }`;
    },
    '',
  );
  const sanitizedData = `---${extractedMetaData}\n---\n${
    migrateMDFiles
      ? sanitizeMD(extractedData.rawContent)
      : extractedData.rawContent
  }`;
  return sanitizedData;
}

// TODO refactor this new type should be used everywhere instead  of passing many params to each method
type MigrationContext = {
  siteDir: string;
  newDir: string;
  shouldMigrateMdFiles: boolean;
  shouldMigratePages: boolean;
  v1Config: VersionOneConfig;
  v2Config: VersionTwoConfig;
};

export async function migrateDocusaurusProject(
  siteDir: string,
  newDir: string,
  shouldMigrateMdFiles: boolean = false,
  shouldMigratePages: boolean = false,
): Promise<void> {
  function createMigrationContext(): MigrationContext {
    const v1Config = importFresh(`${siteDir}/siteConfig`) as VersionOneConfig;
    console.log('Starting migration from v1 to v2...');
    const partialMigrationContext = {
      siteDir,
      newDir,
      shouldMigrateMdFiles,
      shouldMigratePages,
      v1Config,
    };
    const v2Config = createConfigFile(partialMigrationContext);
    return {
      ...partialMigrationContext,
      v2Config,
    };
  }

  const migrationContext = createMigrationContext();

  // TODO need refactor legacy, we pass migrationContext to all methods
  const siteConfig = migrationContext.v1Config;
  const config = migrationContext.v2Config;

  const classicPreset = migrationContext.v2Config.presets[0][1];

  const deps: Record<string, string> = {
    '@docusaurus/core': DOCUSAURUS_VERSION,
    '@docusaurus/preset-classic': DOCUSAURUS_VERSION,
    clsx: '^1.1.1',
    react: '^16.10.2',
    'react-dom': '^16.10.2',
  };
  try {
    createClientRedirects(siteConfig, deps, config);
    console.log(
      chalk.green('Successfully created client redirect for non clean URL'),
    );
  } catch (errorInClientRedirect) {
    console.log(
      chalk.red(`Error while creating redirects: ${errorInClientRedirect}`),
    );
  }
  if (shouldMigratePages) {
    try {
      createPages(newDir, siteDir);
      console.log(
        chalk.green(
          'Successfully created pages (check migration page for more details)',
        ),
      );
    } catch (errorInMigratingPages) {
      console.log(
        chalk.red(
          `Error occurred while creating pages: ${errorInMigratingPages}`,
        ),
      );
    }
  } else {
    try {
      createDefaultLandingPage(newDir);
      console.log(
        chalk.green(
          'Successfully created landing page (check migration page for more details)',
        ),
      );
    } catch (errorInLandingPage) {
      console.log(
        chalk.red(
          `Error occurred while creating landing page: ${errorInLandingPage}`,
        ),
      );
    }
  }

  try {
    migrateStaticFiles(siteDir, newDir);
    console.log(chalk.green('Successfully migrated static folder'));
  } catch (errorInStatic) {
    console.log(
      chalk.red(`Error occurred while copying static folder: ${errorInStatic}`),
    );
  }
  try {
    migrateBlogFiles(siteDir, newDir, classicPreset, shouldMigrateMdFiles);
  } catch (errorInMigratingBlogs) {
    console.log(
      chalk.red(
        `Error occurred while migrating blogs: ${errorInMigratingBlogs}`,
      ),
    );
  }
  try {
    handleVersioning(siteDir, siteConfig, newDir, config, shouldMigrateMdFiles);
  } catch (errorInVersion) {
    console.log(
      chalk.red(
        `Error occurred while migrating versioned docs: ${errorInVersion}`,
      ),
    );
  }

  try {
    migrateLatestDocs(siteDir, newDir, shouldMigrateMdFiles, classicPreset);
  } catch (errorInDoc) {
    chalk.red(`Error occurred while migrating docs: ${errorInDoc}`);
  }

  try {
    migrateLatestSidebar(siteDir, newDir, classicPreset, siteConfig);
  } catch (error) {
    console.log(chalk.red(`Error occurred while migrating sidebar: ${error}`));
  }

  try {
    fs.writeFileSync(
      path.join(newDir, 'docusaurus.config.js'),
      `module.exports=${JSON.stringify(config, null, 2)}`,
    );
    console.log(
      chalk.green(
        `Successfully created a new config file with new navbar and footer config`,
      ),
    );
  } catch (error) {
    console.log(
      chalk.red(`Error occurred while creating config file: ${error}`),
    );
  }
  try {
    migratePackageFile(siteDir, deps, newDir);
  } catch (error) {
    console.log(
      chalk.red(
        `Error occurred while creating package.json file for project: ${error}`,
      ),
    );
  }
  console.log('Completed migration from v1 to v2');
}

export function createConfigFile({
  v1Config,
  siteDir,
  newDir,
}: Pick<
  MigrationContext,
  'v1Config' | 'siteDir' | 'newDir'
>): VersionTwoConfig {
  const siteConfig = v1Config;
  const homePageId = siteConfig.headerLinks?.filter((value) => value.doc)[0]
    .doc;

  const customConfigFields: Record<string, any> = {};
  // add fields that are unknown to v2 to customConfigFields
  Object.keys(siteConfig).forEach((key: any) => {
    const knownFields = [
      'title',
      'tagline',
      'url',
      'baseUrl',
      'organizationName',
      'projectName',
      'scripts',
      'stylesheets',
      'favicon',
      'cname',
      'noIndex',
      'headerLinks',
      'headerIcon',
      'footerIcon',
      'algolia',
      'colors',
      'copyright',
      'editUrl',
      'customDocsPath',
      'facebookComments',
      'usePrism',
      'highlight',
      'twitterUsername',
      'scrollToTopOptions',
      'twitter',
      'twitterImage',
      'onPageNav',
      'cleanUrl',
      'ogImage',
      'scrollToTop',
      'enableUpdateTime',
      'enableUpdateBy',
      'docsSideNavCollapsible',
      'gaTrackingId',
    ];
    const value = siteConfig[key as keyof typeof siteConfig];
    if (value !== undefined && !knownFields.includes(key)) {
      customConfigFields[key] = value;
    }
  });
  console.log(
    `${chalk.yellow(
      'Following Fields from siteConfig.js will be added to docusaurus.config.js in `customFields`',
    )}\n${chalk.yellow(Object.keys(customConfigFields).join('\n'))}`,
  );

  let v2DocsPath: string | undefined;
  if (siteConfig.customDocsPath) {
    const absoluteDocsPath = path.resolve(
      siteDir,
      '..',
      siteConfig.customDocsPath,
    );
    v2DocsPath = path.relative(newDir, absoluteDocsPath);
  }

  const result: VersionTwoConfig = {
    title: siteConfig.title ?? '',
    tagline: siteConfig.tagline,
    url: siteConfig.url ?? '',
    baseUrl: siteConfig.baseUrl ?? '',
    organizationName: siteConfig.organizationName,
    projectName: siteConfig.projectName,
    noIndex: siteConfig.noIndex,
    scripts: siteConfig.scripts,
    stylesheets: siteConfig.stylesheets,
    favicon: siteConfig.favicon ?? '',
    customFields: customConfigFields,
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            ...(v2DocsPath && {path: v2DocsPath}),
            homePageId,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            editUrl: siteConfig.editUrl,
          },
          blog: {},
          theme: {},
        },
      ],
    ],
    plugins: [],
    themeConfig: {
      navbar: {
        title: siteConfig.title,
        logo: siteConfig.headerIcon
          ? {
              src: siteConfig.headerIcon,
            }
          : undefined,
        items: (siteConfig.headerLinks ?? [])
          .map((link) => {
            if (link.doc) {
              return {
                to: `docs/${link.doc === homePageId ? '' : link.doc}`,
                label: link.label,
                position: 'left',
              };
            }
            if (link.page) {
              return {
                to: `/${link.page}`,
                label: link.label,
                position: 'left',
              };
            }
            if (link.href) {
              return {href: link.href, label: link.label, position: 'left'};
            }
            return null;
          })
          .filter(Boolean),
      },
      image: siteConfig.ogImage ? siteConfig.ogImage : undefined,
      footer: {
        links: siteConfig.twitterUsername
          ? [
              {
                title: 'Community',
                items: [
                  {
                    label: 'Twitter',
                    to: `https://twitter.com/${siteConfig.twitterUsername}`,
                  },
                ],
              },
            ]
          : [],
        copyright: siteConfig.copyright,
        logo: {
          src: siteConfig.footerIcon,
        },
      },
      algolia: siteConfig.algolia ? siteConfig.algolia : undefined,
      gtag: siteConfig.gaTrackingId
        ? {
            trackingID: siteConfig.gaTrackingId,
          }
        : undefined,
    },
  };
  return result;
}

function createClientRedirects(
  siteConfig: VersionOneConfig,
  deps: {[key: string]: string},
  config: VersionTwoConfig,
): void {
  if (!siteConfig.cleanUrl) {
    deps['@docusaurus/plugin-client-redirects'] = DOCUSAURUS_VERSION;
    config.plugins.push([
      '@docusaurus/plugin-client-redirects',
      {fromExtensions: ['html']},
    ]);
  }
}

function createPages(newDir: string, siteDir: string): void {
  fs.mkdirpSync(path.join(newDir, 'src', 'pages'));
  if (fs.existsSync(path.join(siteDir, 'pages', 'en'))) {
    try {
      fs.copySync(
        path.join(siteDir, 'pages', 'en'),
        path.join(newDir, 'src', 'pages'),
      );
      const files = glob.sync('**/*.js', {
        cwd: path.join(newDir, 'src', 'pages'),
      });
      files.forEach((file) => {
        const filePath = path.join(newDir, 'src', 'pages', file);
        const content = String(fs.readFileSync(filePath));
        fs.writeFileSync(filePath, migratePage(content));
      });
    } catch (error) {
      console.log(chalk.red(`Unable to migrate Pages : ${error}`));
      createDefaultLandingPage(newDir);
    }
  } else {
    console.log('Ignoring Pages');
  }
}

function createDefaultLandingPage(newDir: string) {
  const indexPage = `import Layout from "@theme/Layout";
      import React from "react";

      export default () => {
        return <Layout />;
      };
      `;
  fs.mkdirpSync(`${newDir}/src/pages/`);
  fs.writeFileSync(`${newDir}/src/pages/index.js`, indexPage);
}

function migrateStaticFiles(siteDir: string, newDir: string): void {
  if (fs.existsSync(path.join(siteDir, 'static'))) {
    fs.copySync(path.join(siteDir, 'static'), path.join(newDir, 'static'));
  } else {
    fs.mkdirSync(path.join(newDir, 'static'));
  }
}

function migrateBlogFiles(
  siteDir: string,
  newDir: string,
  classicPreset: ClassicPresetEntries,
  migrateMDFiles: boolean,
): void {
  if (fs.existsSync(path.join(siteDir, 'blog'))) {
    fs.copySync(path.join(siteDir, 'blog'), path.join(newDir, 'blog'));
    const files = walk(path.join(newDir, 'blog'));
    files.forEach((file) => {
      const content = String(fs.readFileSync(file));
      fs.writeFileSync(file, sanitizedFileContent(content, migrateMDFiles));
    });
    classicPreset.blog.path = 'blog';
    console.log(
      chalk.green(
        `Successfully migrated blogs to version 2 with change in frontmatter`,
      ),
    );
  } else {
    console.log(chalk.yellow(`Blog not found. Skipping migration for blog`));
  }
}

function handleVersioning(
  siteDir: string,
  siteConfig: VersionOneConfig,
  newDir: string,
  config: VersionTwoConfig,
  migrateMDFiles: boolean,
): void {
  if (fs.existsSync(path.join(siteDir, 'versions.json'))) {
    const loadedVersions: Array<string> = JSON.parse(
      String(fs.readFileSync(path.join(siteDir, 'versions.json'))),
    );
    fs.copyFile(
      path.join(siteDir, 'versions.json'),
      path.join(newDir, 'versions.json'),
    );
    const versions = loadedVersions.reverse();
    const versionRegex = new RegExp(`version-(${versions.join('|')})-`, 'mgi');
    migrateVersionedSidebar(siteDir, newDir, versions, versionRegex, config);
    fs.mkdirpSync(path.join(newDir, 'versioned_docs'));
    migrateVersionedDocs(
      siteConfig,
      versions,
      siteDir,
      newDir,
      versionRegex,
      migrateMDFiles,
    );
    console.log(
      chalk.green(
        `Successfully migrated version docs and sidebar. The following doc versions have been created: \n${loadedVersions.join(
          '\n',
        )}`,
      ),
    );
  } else {
    console.log(
      chalk.yellow(
        'Versioned docs not found. Skipping migration for versioned docs',
      ),
    );
  }
}

function migrateVersionedDocs(
  siteConfig: VersionOneConfig,
  versions: string[],
  siteDir: string,
  newDir: string,
  versionRegex: RegExp,
  migrateMDFiles: boolean,
): void {
  versions.reverse().forEach((version, index) => {
    if (index === 0) {
      fs.copySync(
        path.join(siteDir, '..', siteConfig.customDocsPath || 'docs'),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      fs.copySync(
        path.join(siteDir, 'versioned_docs', `version-${version}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      return;
    }
    try {
      fs.mkdirsSync(path.join(newDir, 'versioned_docs', `version-${version}`));
      fs.copySync(
        path.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
      fs.copySync(
        path.join(siteDir, 'versioned_docs', `version-${version}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
    } catch {
      fs.copySync(
        path.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`),
        path.join(newDir, 'versioned_docs', `version-${version}`),
      );
    }
  });
  const files = walk(path.join(newDir, 'versioned_docs'));
  files.forEach((pathToFile) => {
    const content = fs.readFileSync(pathToFile).toString();
    fs.writeFileSync(
      pathToFile,
      sanitizedFileContent(content.replace(versionRegex, ''), migrateMDFiles),
    );
  });
}

function migrateVersionedSidebar(
  siteDir: string,
  newDir: string,
  versions: string[],
  versionRegex: RegExp,
  config: VersionTwoConfig,
): void {
  if (fs.existsSync(path.join(siteDir, 'versioned_sidebars'))) {
    fs.mkdirpSync(path.join(newDir, 'versioned_sidebars'));
    const sidebars: {
      entries: SidebarEntries;
      version: string;
    }[] = [];
    versions.forEach((version, index) => {
      let sidebarEntries: SidebarEntries;
      const sidebarPath = path.join(
        siteDir,
        'versioned_sidebars',
        `version-${version}-sidebars.json`,
      );
      try {
        fs.statSync(sidebarPath);
        sidebarEntries = JSON.parse(String(fs.readFileSync(sidebarPath)));
      } catch {
        sidebars.push({version, entries: sidebars[index - 1].entries});
        return;
      }
      const newSidebar = Object.entries(sidebarEntries).reduce(
        (topLevel: {[key: string]: any}, value) => {
          const key = value[0].replace(versionRegex, '');
          // eslint-disable-next-line no-param-reassign
          topLevel[key] = Object.entries(value[1]).reduce(
            (
              acc: {[key: string]: Array<Record<string, unknown> | string>},
              val,
            ) => {
              acc[val[0].replace(versionRegex, '')] = (val[1] as Array<
                any
              >).map((item) => {
                if (typeof item === 'string') {
                  return item.replace(versionRegex, '');
                }
                return {
                  type: 'category',
                  label: item.label,
                  ids: item.ids.map((id: string) =>
                    id.replace(versionRegex, ''),
                  ),
                };
              });
              return acc;
            },
            {},
          );
          return topLevel;
        },
        {},
      );
      sidebars.push({version, entries: newSidebar});
    });
    sidebars.forEach((sidebar) => {
      const newSidebar = Object.entries(sidebar.entries).reduce(
        (acc: {[key: string]: any}, val) => {
          const key = `version-${sidebar.version}/${val[0]}`;
          // eslint-disable-next-line prefer-destructuring
          acc[key] = Object.entries(val[1]).map((value) => {
            return {
              type: 'category',
              label: value[0],
              items: (value[1] as Array<any>).map((sidebarItem) => {
                if (typeof sidebarItem === 'string') {
                  return {
                    type: 'doc',
                    id: `version-${sidebar.version}/${sidebarItem}`,
                  };
                }
                return {
                  type: 'category',
                  label: sidebarItem.label,
                  items: sidebarItem.ids.map((id: string) => ({
                    type: 'doc',
                    id: `version-${sidebar.version}/${id}`,
                  })),
                };
              }),
            };
          });
          return acc;
        },
        {},
      );
      fs.writeFileSync(
        path.join(
          newDir,
          'versioned_sidebars',
          `version-${sidebar.version}-sidebars.json`,
        ),
        JSON.stringify(newSidebar, null, 2),
      );
    });
    config.themeConfig.navbar.items.push({
      label: 'Version',
      to: 'docs',
      position: 'right',
      items: [
        {
          label: versions[versions.length - 1],
          to: 'docs/',
          activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
        },
        ...versions
          .reverse()
          .slice(1)
          .map((version) => ({
            label: version,
            to: `docs/${version}/`,
          })),
        {
          label: 'Master/Unreleased',
          to: `docs/next/`,
          activeBaseRegex: `docs/next/(?!support|team|resources)`,
        },
      ],
    });
  }
}

function migrateLatestSidebar(
  siteDir: string,
  newDir: string,
  classicPreset: ClassicPresetEntries,
  siteConfig: VersionOneConfig,
): void {
  try {
    fs.copyFileSync(
      path.join(siteDir, 'sidebars.json'),
      path.join(newDir, 'sidebars.json'),
    );
    classicPreset.docs.sidebarPath = path.join(
      path.relative(newDir, siteDir),
      'sidebars.json',
    );
  } catch {
    console.log(
      chalk.yellow(`Sidebar not found. Skipping migration for sidebar`),
    );
  }
  if (siteConfig.colors) {
    const primaryColor = Color(siteConfig.colors.primaryColor);
    const css = `:root{
  --ifm-color-primary-lightest: ${primaryColor.darken(-0.3).hex()};
  --ifm-color-primary-lighter: ${primaryColor.darken(-0.15).hex()};
  --ifm-color-primary-light: ${primaryColor.darken(-0.1).hex()};
  --ifm-color-primary: ${siteConfig.colors.primaryColor};
  --ifm-color-primary-dark: ${primaryColor.darken(0.1).hex()};
  --ifm-color-primary-darker: ${primaryColor.darken(0.15).hex()};
  --ifm-color-primary-darkest: ${primaryColor.darken(0.3).hex()};
}
`;
    fs.mkdirpSync(path.join(newDir, 'src', 'css'));
    fs.writeFileSync(path.join(newDir, 'src', 'css', 'customTheme.css'), css);
    classicPreset.theme.customCss = path.join(
      path.relative(newDir, path.join(siteDir, '..')),
      'src',
      'css',
      'customTheme.css',
    );
  }
}

function migrateLatestDocs(
  siteDir: string,
  newDir: string,
  migrateMDFiles: boolean,
  classicPreset: ClassicPresetEntries,
): void {
  if (fs.existsSync(path.join(siteDir, '..', 'docs'))) {
    const docsPath = path.join(
      path.relative(newDir, path.join(siteDir, '..')),
      'docs',
    );
    classicPreset.docs.path = docsPath;
    const files = walk(path.join(siteDir, '..', 'docs'));
    files.forEach((file) => {
      const content = String(fs.readFileSync(file));
      fs.writeFileSync(file, sanitizedFileContent(content, migrateMDFiles));
    });
    console.log(chalk.green(`Successfully migrated docs to version 2`));
  } else {
    console.log(
      chalk.yellow(`Docs folder not found. Skipping migration for docs`),
    );
  }
}

function migratePackageFile(
  siteDir: string,
  deps: {[key: string]: string},
  newDir: string,
): void {
  const packageFile = importFresh(`${siteDir}/package.json`) as {
    [key: string]: any;
  };
  packageFile.scripts = {
    ...packageFile.scripts,
    start: 'docusaurus start',
    build: 'docusaurus build',
    swizzle: 'docusaurus swizzle',
    deploy: 'docusaurus deploy',
    docusaurus: 'docusaurus',
  };
  if (packageFile.dependencies) {
    delete packageFile.dependencies.docusaurus;
  }
  if (packageFile.devDependencies) {
    delete packageFile.devDependencies.docusaurus;
  }

  packageFile.dependencies = {
    ...packageFile.dependencies,
    ...deps,
  };
  fs.writeFileSync(
    path.join(newDir, 'package.json'),
    JSON.stringify(packageFile, null, 2),
  );
  console.log(chalk.green(`Successfully migrated package.json file`));
}

export async function migrateMDToMDX(
  siteDir: string,
  newDir: string,
): Promise<void> {
  fs.mkdirpSync(newDir);
  fs.copySync(siteDir, newDir);
  const files = walk(newDir);
  files.forEach((file) => {
    fs.writeFileSync(
      file,
      sanitizedFileContent(String(fs.readFileSync(file)), true),
    );
  });
  console.log(`Succesfully migrated ${siteDir} to ${newDir}`);
}
