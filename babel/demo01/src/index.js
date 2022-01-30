import React from 'react';
import TestFunComponent from 'TestFunComponent';

const test = () => {
  return <div>123</div>;
};

// class TestClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div>123434123</div>;
//   }
// }

class PublicPoint {
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

class Point extends PublicPoint {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
}

// class Test2 {
//   constructor() {
//     super();
//   }
// }

(async () => {
  await new Promise(resolve => {
    resolve(1234567891011123);
  });
})();

const map = new Map();

TestFunComponent();

var a = 1 ?? 0;

new Promise();
[1, 2, 3].includes('012');

const b = new Symbol('a1bbbbb');

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

Reflect.get(myObject, 'foo1'); // 1
Reflect.get(myObject, 'bar'); // 2
Reflect.get(myObject, 'baz'); // 3
