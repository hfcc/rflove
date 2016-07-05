const Koa = require('koa');
const co = require('co');
const router = require('koa-router')();
const staticServer = require('koa-static-server');

const app = new Koa();

app.use(co.wrap(function *(ctx, next){
    const start = new Date();
    yield next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}));

app.use(staticServer({rootDir: 'webapp'}));

// router.get('/', function (ctx, next){
//    ctx.body = "hello koa & co & koa-router";
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);