import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  dva: {},
  antd: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', name: 'test1', component: '@/pages/test1' },
    { path: '/test2', name: 'test2', component: '@/pages/test2' },
    { path: '/test3', name: 'test3', component: '@/pages/test3' },
    {
      path: '/websiteGame',
      name: 'websiteGame',
      component: '@/pages/websiteGame/game',
    },
    {
      path: '/ButtonSize',
      name: 'ButtonSize',
      component: '@/pages/ButtonSize',
    },
  ],
  fastRefresh: {},
  locale: {},
});
