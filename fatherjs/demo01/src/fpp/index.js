import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import './index.less';
class FppClassTest extends Component {
  render() {
    console.log(this);
    return <div>FppClassTest</div>;
  }
}
function FppFuncTest() {
  const [x, setX] = useState(0);
  const [z] = useState({ a: 1, b: 2, c: 3 });
  const { a, b, c } = z;

  const d = { e: 666, ...z };
  const y = x ?? '00';

  const e = d?.e;
  useEffect(() => {
    (async () => {
      const a = await new Promise(resolve => {
        console.log(12312);
        resolve('666');
      });
      console.log(a);
    })();
  }, []);

  useEffect(() => {
    new Promise(resolve => {
      resolve('去then');
    }).then(res => {
      console.log(res);
    });
  }, []);

  useEffect(() => {
    const mapTest = [1, 2, 3].map(item => item * 2);
    console.log('🚀 ~ useEffect ~ mapTest', mapTest);
  }, []);

  useEffect(() => {
    const map = new Map();
    map.set('map1', 1);
    map.set('map2', 2);
    map.get('map2');
    console.log('🚀 ~ useEffect ~ map', map);

    function testFunc(a, ...rest) {
      Array.from([1, 2, 3]);
      console.log('🚀 ~ testFunc ~ rest', rest);
    }

    testFunc(1, 2, 2, 3);
  }, []);

  return (
    <>
      <div
        onClick={() => {
          console.log(this);
          setX(x => x + 1);
        }}
      >
        点击设置x
      </div>
      <div>当前x的值为: {x}</div>
      <div>当前y的值为: {y}</div>
      <div>当前a的值为: {a}</div>
      <div>当前b的值为: {b}</div>
      <div>当前c的值为: {c}</div>
      <div>当前d的值为: {JSON.stringify(d)}</div>
      <div>当前e的值为: {e}</div>
    </>
  );
}
export { FppClassTest, FppFuncTest };
