import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import pkg from '../package.json';
export default createModuleFederationConfig({
  name: 'hasnum_provider',
  exposes: {
    './part': './src/components/Part/index.tsx',
  },
  shared: [
    {
      ...pkg.dependencies,
      'react': { singleton: true },
      'react-dom': { singleton: true },
    },
  ],
});
