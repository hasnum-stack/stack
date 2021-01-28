// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'E:/TEST/js/umi/test1/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'E:/TEST/js/umi/test1/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "name": "test1",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test1' */'@/pages/test1'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/test2",
        "name": "test2",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test2' */'@/pages/test2'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/test3",
        "name": "test3",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test3' */'@/pages/test3'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ButtonSize",
        "name": "ButtonSize",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ButtonSize' */'@/pages/ButtonSize'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
