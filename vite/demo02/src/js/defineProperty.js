let obj = {
  defaultkey: 'a default key',
};
Object.defineProperty(obj, 'a', {
  value: 1, //当前值
  enumerable: false, //可遍历
  writable: true, //可改写
  configurable: true, //可配置
});

obj.a = 2;

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log('遍历的值', element);
  }
}
console.log('obj对象', obj);
