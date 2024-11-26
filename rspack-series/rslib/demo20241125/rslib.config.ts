import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
      output: {
        distPath: {
          root: 'es',
        },
      },
    },
    {
      bundle: false,
      dts: true,
      format: 'cjs',
      output: {
        distPath: {
          root: 'lib',
        },
      },
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'classic',
      },
    }),
  ],
});
