import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  dev: {
    writeToDisk: true,
  },
  output: {
    sourceMap: false,
    polyfill: 'entry',
    minify: false,
    // externals: { 'react': 'React', 'react-dom': 'ReactDOM' },
  },
  html: {
    inject: 'body',

    tags: [
      {
        tag: 'script',
        children: 'console.log(123); Array.prototype.includes = null;',
      },
      // {
      //   tag: 'script',
      //   attrs: {
      //     src: 'https://unpkg.com/react@18/umd/react.development.js',
      //   },
      // },
      // {
      //   tag: 'script',
      //   attrs: {
      //     src: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
      //   },
      // },
    ],
  },
  plugins: [
    pluginReact(),
    pluginLess({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }),
  ],
  // tools: {
  //   lightningcssLoader: false,
  // },
});
