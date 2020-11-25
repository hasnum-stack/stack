const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/test', async ctx => {
    ctx.body = ctx.req.url
});
router.get('/list', async ctx => {
    ctx.body = [1, 2, 4]
})
router.get('/start/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = {
        id,
        time: Date.now()
    }
})
router.post('/submit', async ctx => {
    const id = ctx.request.querystring;
    console.log('id', id);
    ctx.body = { id: 123 }
    console.log('id', id);
})


app.use(router.routes());
app.listen(8888);