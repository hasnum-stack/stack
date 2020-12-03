const express = require('express');
const app = express();
const port = 3000;

// 允许跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('X-Powered-By', ' 3.2.1');
    /*让options请求快速返回*/
    if (req.method === 'OPTIONS') res.send(200);
    else next();
});

app.get('/', (req, res) => res.json({ data: { user: 'zzh' }, code: 400 }));
app.listen(port, () => console.log(`开启${port}`));
