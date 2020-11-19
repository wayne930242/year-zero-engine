/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import loadClientModules from '../index';

import pluginEmpty from './__fixtures__/plugin-empty';
import pluginFooBar from './__fixtures__/plugin-foo-bar';
import pluginHelloWorld from './__fixtures__/plugin-hello-world';

describe('loadClientModules', () => {
  test('empty', () => {
    const clientModules = loadClientModules([pluginEmpty()]);
    expect(clientModules).toMatchInlineSnapshot(`Array []`);
  });

  test('non-empty', () => {
    const clientModules = loadClientModules([pluginFooBar()]);
    expect(clientModules).toMatchInlineSnapshot(`
      Array [
        "foo",
        "bar",
      ]
    `);
  });

  test('multiple non-empty', () => {
    const clientModules = loadClientModules([
      pluginFooBar(),
      pluginHelloWorld(),
    ]);
    expect(clientModules).toMatchInlineSnapshot(`
      Array [
        "foo",
        "bar",
        "hello",
        "world",
      ]
    `);
  });

  test('multiple non-empty different order', () => {
    const clientModules = loadClientModules([
      pluginHelloWorld(),
      pluginFooBar(),
    ]);
    expect(clientModules).toMatchInlineSnapshot(`
      Array [
        "hello",
        "world",
        "foo",
        "bar",
      ]
    `);
  });

  test('empty and non-empty', () => {
    const clientModules = loadClientModules([
      pluginHelloWorld(),
      pluginEmpty(),
      pluginFooBar(),
    ]);
    expect(clientModules).toMatchInlineSnapshot(`
      Array [
        "hello",
        "world",
        "foo",
        "bar",
      ]
    `);
  });

  test('empty and non-empty different order', () => {
    const clientModules = loadClientModules([
      pluginHelloWorld(),
      pluginFooBar(),
      pluginEmpty(),
    ]);
    expect(clientModules).toMatchInlineSnapshot(`
      Array [
        "hello",
        "world",
        "foo",
        "bar",
      ]
    `);
  });
});
