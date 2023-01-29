//同步保险钩子
const { SyncBailHook } = require('tapable');
const hook = new SyncBailHook(['arg1', 'arg2', 'arg3']);
hook.tap('tap1', (...args) => {
  console.log('🚀 ~ hook.tap ~ args', args);
  /**
   * 非undefined中断后续tap
   */
  return true;
});

hook.tap('tap2', (...args) => {
  console.log('🚀 ~ hook.tap ~ args', args);
});
hook.call('h', 'e', 'l', 'l', 'o');
