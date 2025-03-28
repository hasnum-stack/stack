import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import pkg from '../package.json';
import fs from 'fs';
import path from 'path';

const componentsDir = path.resolve(process.cwd(), 'src/components');
const components = fs.readdirSync(componentsDir).reduce((acc, file) => {
  const filePath = path.join(componentsDir, file);
  const fileStat = fs.statSync(filePath);
  if (fileStat.isDirectory()) {
    const componentName = file;
    acc[`./${componentName}`] = `./src/components/${componentName}/index.tsx`;
  }
  return acc;
}, {});
export default createModuleFederationConfig({
  name: 'hasnum_provider',
  exposes: {
    ...components,
  },
  shared: [
    {
      ...pkg.dependencies,
      'react': { singleton: true },
      'react-dom': { singleton: true },
    },
  ],
});
