import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  extraBabelPlugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        version: '^7.16.10',
        // ,
        // "useESModules": true
      },
    ],
  ],
  routes: [{ path: '/', component: '@/pages/index' }],
  // fastRefresh: {},
  webpack5: {},
});
