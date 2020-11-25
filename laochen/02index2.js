const qs = require('qs');
// 首先查看是否是node内核模块,是就直接返回
// 相对地址直接按地址查找
// 第三方模块按照以下顺序加载
//1.require优先加载该包的模块的同级目录中node_modules文件夹查找
//2.找到后,会查找该第三方包package.json文件,并且找到里面mian属性的值,即为对应的入口模块的位置
//3.没有package.json或者main属性,则默认加载index.js
//4.如果同级目录下没有node_modules文件夹,则会向父级查找
//5.如果磁盘根目录都没有找到,则抛出错误,can not find moudle xxx
console.log('🚀 ~ qs', qs.stringify({ a: 1 }));
