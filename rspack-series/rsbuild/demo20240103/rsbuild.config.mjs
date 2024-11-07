import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    disableMinimize: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience',
      // override: {
      //   cacheGroups: {
      //     antd: {
      //       test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
      //       name: 'lib-antd',
      //       chunks: 'all',
      //     },
      //   },
      // },
    },
  },
  // dev: {
  //   writeToDisk: true,
  // },
});
