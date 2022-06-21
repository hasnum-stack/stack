import React from 'react';
import ReactDom from 'react-dom';
import App from './app5';

import { Add } from '../utils/index';
import forEach from 'lodash/forEach';

import 'qs';
console.log('🚀 ~ Add', Add(1, 2));
export default Add(1, 2);
import(/* webpackChunkName: 'app2' */ './app2').then(res => {
  console.log('🚀 ~ import ~ res', res);
});
forEach([1, 2, 3], item => {
  console.log(item);
});
import(/* webpackChunkName: 'app4' */ './app4');
ReactDom.render(<App />, document.querySelector('#root'));
