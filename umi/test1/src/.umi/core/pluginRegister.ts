// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from 'E:/TEST/js/umi/test1/src/app.ts';
import * as Plugin_1 from 'E:/TEST/js/umi/test1/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from 'E:/TEST/js/umi/test1/src/.umi/plugin-locale/runtime.tsx';
import * as Plugin_4 from '@@/plugin-layout/runtime.tsx';
import * as Plugin_5 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: 'E:/TEST/js/umi/test1/src/app.ts',
  });
  plugin.register({
    apply: Plugin_1,
    path: 'E:/TEST/js/umi/test1/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: 'E:/TEST/js/umi/test1/src/.umi/plugin-locale/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_4,
    path: '@@/plugin-layout/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_5,
    path: '../plugin-model/runtime',
  });
