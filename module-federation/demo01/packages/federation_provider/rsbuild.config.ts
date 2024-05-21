import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  dev: {
    // 必须要配置 assetPrefix，在生产环境需要配置 output.assetPrefix
    assetPrefix: 'http://localhost:3000',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // 需要设置一个唯一值不能和其他应用相等
      config.output!.uniqueName = 'federation_provider';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './button': './src/components/Button/index.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
