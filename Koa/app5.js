const Koa = require('koa');
const Router = require('@koa/router');
const views = require('koa-views');

const router = new Router();
const app = new Koa();
const render = views(`${__dirname }/views`, {
    // map: {
    //     ejs: 'ejs'
    // }
    extension: 'ejs'
})

router.get('/', async ctx => {
    //extension 就不用写 后缀 .ejs
    //map 需要些后缀

    await ctx.render('./index', {
        user: {
            name: '777'
        }
    })
});

app.use(render);
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080)