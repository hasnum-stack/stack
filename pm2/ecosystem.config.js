module.exports = {
  apps: [{
    name: 'nuxt-app',
    script: './node_modules/nuxt/bin/nuxt.js',  // 不能用npm run start 的命令，会报错端口占用
    args: 'start',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1, // 实例个数，也可以填 'max' 自动匹配服务器支持的最大实例数
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G', // 我的服务器是1g内存，当超过1g内存，会重启
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};