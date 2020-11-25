const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const public = new Router();
const sub1 = new Router({
    prefix: '/:oooo'
});
const sub2 = new Router({
    prefix: '/sub2'
});


const noFind = new Router({
    prefix: '/noFind'
});

const Find = new Router({
    prefix: '/Find'
});


sub1.get('/list1', async ctx => {
    ctx.body = {
        time: Date.now(),
        url: ctx.req.url,
        id: ctx.params.id,
        oooo: ctx.params.oooo
    }
})
sub1.get('/list2', async ctx => {
    ctx.body = {
        time: Date.now(),
        url: ctx.req.url,
        id: ctx.params.id
    }
})

sub2.get('/list1', async ctx => {
    ctx.body = {
        time: Date.now(),
        url: ctx.req.url,
        id: ctx.params.id
    }
})

sub2.get('/list2', async ctx => {
    ctx.body = {
        time: Date.now(),
        url: ctx.req.url,
        id: ctx.params.id
    }
})


noFind.get('/list', async ctx => {
    ctx.body = 'no find (ノへ￣、)';
})

Find.get('/get', async ctx => {
    ctx.redirect('/noFind/list');
})
public.use('/:id', sub1.routes(), sub2.routes())

app
    .use(Find.routes()).use(Find.allowedMethods())
    .use(noFind.routes()).use(noFind.allowedMethods())
    .use(public.routes()).use(public.allowedMethods())
    .listen(8001)