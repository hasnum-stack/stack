import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  dva: {},
  antd: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', name: 'test1', component: '@/pages/test1' },
    { path: '/test2', name: 'test2', component: '@/pages/test2' },
    {
      path: '/ButtonSize',
      name: 'ButtonSize',
      component: '@/pages/ButtonSize',
    },
  ],
  fastRefresh: {},
  locale: {},
});
