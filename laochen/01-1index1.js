module.exports = { a: 1 };
//一个模块中的代码仅在模块第一次被使用时执行一次,并在使用过程中初始化,之后缓存起来便于后续使用
//意思是说,第一次一外以后引用index.js,不会执行console.log
console.log(123);
