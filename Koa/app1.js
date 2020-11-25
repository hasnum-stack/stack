const Koa = require('koa');
const app = new Koa();

const routes = async ctx => {
    if (ctx.req.url === '/') {
        ctx.body = '这里是首页哦 O(∩_∩)O'
    }
    if (ctx.req.url === '/test') {
        ctx.body = '这里是test页面'
    }
    if (ctx.req.url === '/obj') {
        ctx.body = {
            id: 123
        }
    }
}
app.use(routes);

app.listen(8790);