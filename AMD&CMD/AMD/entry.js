/**
 *
 * AMD规范的实现:Require.js,依赖前置,把用到的依赖提前定义好参数
 * require()会异步加载每个模块，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题
 */
require(['./test1.js'], function (a) {
  console.log('🚀 ~ require ~ a', a);
});
console.log(require);
