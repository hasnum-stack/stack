// import _ from 'lodash';
import React from 'react';
import sum from './custom';
// import('./lib')
import Div from './lib';
console.log('🚀 ~ Div', Div);

let a = 1;
let b = sum(2, 3);
for (let index = 0; index < b; index++) {
  console.log('🚀 ~ index', React.version);
}

console.log(React.createElement('div'));
// console.log(a + 1);
// console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
export default 'hasnum~~~victory';
