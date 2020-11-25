const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const group1 = new Router({
    prefix: '/group1'
});
const group2 = new Router({
    prefix: '/group2'
});

group1.get('/list', async ctx => {
    ctx.body = {
        url: ctx.req.url,
        time: Date.now()
    };
})
group2.get('/list', async ctx => {
    ctx.body = {
        url: ctx.req.url,
        time: Date.now()
    };
})

app
    .use(group1.routes())
    .use(group2.routes());

app.listen(8082)