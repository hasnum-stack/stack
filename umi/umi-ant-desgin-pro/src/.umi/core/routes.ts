// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'E:/TEST/js/umi/umi-ant-desgin-pro/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__login' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/User/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "test",
            "path": "/user/test",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__test' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/User/test'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/layouts/SecurityLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/layouts/BasicLayout'), loading: LoadingComponent}),
            "authority": [
              "admin",
              "user"
            ],
            "routes": [
              {
                "path": "/",
                "redirect": "/welcome",
                "exact": true
              },
              {
                "path": "/welcome",
                "name": "welcome",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/Welcome'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/admin",
                "name": "admin",
                "icon": "crown",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/Admin'), loading: LoadingComponent}),
                "authority": [
                  "admin"
                ],
                "routes": [
                  {
                    "path": "/admin/sub-page",
                    "name": "sub-page",
                    "icon": "smile",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/Welcome'), loading: LoadingComponent}),
                    "authority": [
                      "admin"
                    ],
                    "exact": true
                  }
                ]
              },
              {
                "name": "list.table-list",
                "icon": "table",
                "path": "/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/TableList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/404'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'E:/TEST/js/umi/umi-ant-desgin-pro/src/pages/404'), loading: LoadingComponent}),
    "exact": true
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
