const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
router.get('/form', async ctx => {
    ctx.body = ctx.query;
})

router.post('/form', async ctx => {
    ctx.body = ctx.request;
})
app
    .use(bodyParser())
    .use(router.routes())
    .listen(8009)