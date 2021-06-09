console.log('seajs-entry');
define(function (require, exports, module) {
  var a = require('./dep1');
  console.log('🚀 ~ a', a);
});
