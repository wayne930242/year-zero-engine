/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {validate} from 'webpack';

import createClientConfig from '../client';
import loadSetup from '../../server/loadSetup';

describe('webpack dev config', () => {
  test('simple', async () => {
    console.log = jest.fn();
    const props = await loadSetup('simple');
    const config = createClientConfig(props);
    const errors = validate(config);
    expect(errors.length).toBe(0);
  });

  test('custom', async () => {
    console.log = jest.fn();
    const props = await loadSetup('custom');
    const config = createClientConfig(props);
    const errors = validate(config);
    expect(errors.length).toBe(0);
  });
});
