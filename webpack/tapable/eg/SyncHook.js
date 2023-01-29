//同步钩子
const { SyncHook } = require('tapable');
const syncHook = new SyncHook(['arg1', 'arg2', 'arg3']);
syncHook.tap('tap1', (...args) => {
  console.log('🚀 ~ syncHook.tap ~ args', args);
});

syncHook.tap('tap2', (...args) => {
  console.log('🚀 ~ syncHook.tap ~ args', args);
});
syncHook.call('h', 'e', 'l', 'l', 'o');
