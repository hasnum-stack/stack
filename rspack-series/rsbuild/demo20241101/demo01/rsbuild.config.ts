import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  mode: 'development',
  plugins: [
    pluginReact({
      // Options
    }),
    pluginLess(),
  ],
  tools: {},
  source: {
    transformImport: [
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // 设置 `style: 'css'` 来加载 `.css` 样式
        // 设置 `style: true` 来加载 `.less` 样式
        style: true,
      },
    ],
  },
});
