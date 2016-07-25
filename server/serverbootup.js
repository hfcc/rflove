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

router.get('/users', function(ctx, next) {
    var userList = [
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        },
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        },
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        },
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        },
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }
        ,
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }
        ,
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }
        ,
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }
        ,
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }
        ,
        {
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTypes:[
                {name: "music", count: 50}
            ]
        }

    ];
    ctx.body = userList;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);