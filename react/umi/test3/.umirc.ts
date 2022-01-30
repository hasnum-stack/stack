import { defineConfig } from 'umi';
export default defineConfig({
  layout: {
    icon: 'testicon',
    name: 123,
  },
  routes: [
    {
      path: '/',
      component: '../pages/test1/index.tsx',
      name: '123123',
      icon: 'StepBackward',
    },
    {
      path: '/test2',
      component: '../pages/test2/index.tsx',
      name: '123123',
      icon: 'StepBackward',
    },
  ],
  fastRefresh: true,
});
