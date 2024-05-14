import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'node:path';
const modules = ['node_modules', path.resolve(__dirname, 'src'), path.resolve(__dirname, 'public'), path.resolve(__dirname, '@')];

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: (config, {}) => {
      config.resolve.modules = modules;
    },
  },
});
