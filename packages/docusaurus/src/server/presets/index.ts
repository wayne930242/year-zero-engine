/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import importFresh from 'import-fresh';
import {
  LoadContext,
  PluginConfig,
  Preset,
  PresetConfig,
} from '@docusaurus/types';

export default function loadPresets(
  context: LoadContext,
): {
  plugins: PluginConfig[];
  themes: PluginConfig[];
} {
  const presets: PresetConfig[] = (context.siteConfig || {}).presets || [];
  const unflatPlugins: PluginConfig[][] = [];
  const unflatThemes: PluginConfig[][] = [];

  presets.forEach((presetItem) => {
    let presetModuleImport;
    let presetOptions = {};
    if (typeof presetItem === 'string') {
      presetModuleImport = presetItem;
    } else if (Array.isArray(presetItem)) {
      [presetModuleImport, presetOptions = {}] = presetItem;
    } else {
      throw new Error('Invalid presets format detected in config.');
    }

    const presetModule: any = importFresh(presetModuleImport);
    const preset: Preset = (presetModule.default || presetModule)(
      context,
      presetOptions,
    );

    if (preset.plugins) {
      unflatPlugins.push(preset.plugins);
    }
    if (preset.themes) {
      unflatThemes.push(preset.themes);
    }
  });

  return {
    plugins: ([] as PluginConfig[]).concat(...unflatPlugins).filter(Boolean),
    themes: ([] as PluginConfig[]).concat(...unflatThemes).filter(Boolean),
  };
}
