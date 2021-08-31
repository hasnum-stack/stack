import { add } from './add';
const a = 1;
console.log(a);
console.log(add(1, 2));
console.log('🚀 ~ add(a,1)', add(a, 1));
const abb = new Promise(resolve => {
  resolve(78979);
});
abb.then(resolve => {
  console.log('🚀 ~ a.then ~ resolve', resolve);
});
const fn = () => {
  return 123;
};
fn();
console.log('🚀 ~ fn()', fn());

var sym = Symbol();

var promise = Promise.resolve();

var check = arr.includes('yeah!');

console.log(arr[Symbol.iterator]());
