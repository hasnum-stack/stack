import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './mf/config';
console.log(moduleFederationConfig);
import { version } from './package.json';
const publicPath = `hasnum_provider/${version}/`;
export default defineConfig({
  plugins: [pluginReact(), pluginLess(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    assetPrefix: `/${publicPath}`,
    distPath: {
      root: publicPath,
    },
    cleanDistPath: true,
  },
  server: {
    port: 3001,
  },
});
