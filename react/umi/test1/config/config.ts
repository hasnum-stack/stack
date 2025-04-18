import { IApi, defineConfig } from 'umi';
import path from 'path';
const ESLintPlugin = require('eslint-webpack-plugin');

export default defineConfig({
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.plugin('ESLintPlugin').use(ESLintPlugin, [
      {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        fix: true,
      },
    ]);
  },
  layout: {
    fixedHeader: false,
  },
  // ssr: {},
  dva: {},
  antd: {},
  cssLoader: {
    localsConvention: 'camelCaseOnly',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'browser',
  },
  routes: [
    {
      name: '个人中心',
      path: '/accountcenter',
      component: './AccountCenter',
      icon: 'UpCircle',
    },
    {
      path: '/',
      name: 'test1',
      component: '@/pages/test1',
    },
    {
      path: '/test2',
      name: 'test2',
      component: '@/pages/test2',
    },
    {
      path: '/test3',
      name: 'test3',
      component: '@/pages/test3',
    },
    {
      path: '/test4',
      name: 'test4',
      component: '@/pages/test4',
    },
    {
      path: '/test5',
      name: 'test5',
      component: '@/pages/test5',
    },
    {
      path: '/test6',
      name: 'test6',
      component: '@/pages/test6',
    },
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
  /**
   * 如果是相对路径，则会从项目根目录开始找
   *
   */
  plugins: [`${__dirname}/plugin/index.ts`],
});
