const http = require('http');
const url = require('url');

const conf = {
    hostname: '127.0.0.1',
    port: 8088,
    processId: process.pid,
};
const server = http.createServer((req, res) => {
    let { query } = url.parse(req.url, true);

    if (query.stop === '1') {
        process.kill(conf.processId, 'SIGTERM');
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('你好世界\n');
});

server.listen(conf.port, conf.hostname, function () {
    console.log(`服务运行正在监听 http://${conf.hostname}:${conf.port}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('进程终止');
    });
});
