export default {
  dva: {},
  dynamicImport: false,
  title: 'umi3-test',
  //   routes: {
  //     exclude: [/components\//],
  //   },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  //   exclude: [/components\//],
};
