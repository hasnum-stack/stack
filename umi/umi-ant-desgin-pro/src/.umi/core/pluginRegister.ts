// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from 'E:/TEST/js/umi/umi-ant-desgin-pro/src/app.tsx';
import * as Plugin_1 from 'E:/TEST/js/umi/umi-ant-desgin-pro/node_modules/umi-plugin-antd-icon-config/lib/app.js';
import * as Plugin_2 from 'E:/TEST/js/umi/umi-ant-desgin-pro/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_3 from '../plugin-initial-state/runtime';
import * as Plugin_4 from 'E:/TEST/js/umi/umi-ant-desgin-pro/src/.umi/plugin-locale/runtime.tsx';
import * as Plugin_5 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: 'E:/TEST/js/umi/umi-ant-desgin-pro/src/app.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: 'E:/TEST/js/umi/umi-ant-desgin-pro/node_modules/umi-plugin-antd-icon-config/lib/app.js',
  });
  plugin.register({
    apply: Plugin_2,
    path: 'E:/TEST/js/umi/umi-ant-desgin-pro/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_4,
    path: 'E:/TEST/js/umi/umi-ant-desgin-pro/src/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_5,
    path: '../plugin-model/runtime',
  });
