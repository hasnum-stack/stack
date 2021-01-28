// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/TEST/umi3-test/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('E:/TEST/umi3-test/src/layouts/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('E:/TEST/umi3-test/src/pages/index').default,
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
