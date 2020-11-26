const c = require('./event.js');
console.log('🚀 ~ c', c);
c.on('ready', data => {
    console.log('加载完毕', data);
});
