import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    icon: 'testicon',
    name: 123,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/test1',
      name: '123123',
      icon: 'StepBackward',
    },
    {
      path: '/test2',
      component: '@/pages/test2',
      name: '123123',
      icon: 'StepBackward',
    },
  ],
  fastRefresh: {},
});
