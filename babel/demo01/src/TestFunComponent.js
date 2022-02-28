import React from 'react';

function TestFunComponent() {
  return 'TestFunComponent1';
}

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
};

Reflect.get(myObject, 'foo12'); // 1
Reflect.get(myObject, 'bar2'); // 2
Reflect.get(myObject, 'baz'); // 3

var a = 'a';

var c = {
  [a]: 'ac',
};

class Tets extends React.Component {}

export default TestFunComponent;
