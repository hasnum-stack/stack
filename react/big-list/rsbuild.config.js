// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'classic',
      },
    }),
  ],
  html: {
    tags: [
      {
        tag: 'script',
        attrs: {
          src: '//unpkg.com/react-scan/dist/auto.global.js',
        },
      },
    ],
  },
});
