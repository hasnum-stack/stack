import map from 'lodash/map';
export function Add(a, b) {
  return a + b;
}
console.log(1 + 2);
map([1, 2, 3], item => {
  console.log(item);
  return item;
});
