const Koa = require('koa');
const co = require('co');
const router = require('koa-router')();
const staticServer = require('koa-static-server');
var send = require('koa-send');
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
            id: 1,
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTags:[
                {name: "music", count: 50}
            ]
        },
        {
            id: 2,
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTags:[
                {name: "music", count: 50}
            ]
        },
        {
            id: 3,
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTags:[
                {name: "music", count: 50}
            ]
        },
        {
            id: 4,
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTags:[
                {name: "music", count: 50}
            ]
        },
        {
            id: 5,
            name: "hanfeng",
            description: "developer",
            lovedCount: 5000,
            followerCount: 1000,
            lovedTags:[
                {name: "music", count: 50}
            ]
        },
    ];
    ctx.body = userList;
});

router.get('/users/:id', function(ctx, next){
    console.log("userId: ", ctx.params.id);

    var user = {
        id: 1,
        name: "hanfeng",
        description: "developer",
        lovedTags: [
            {name: "beyond", count: 10},
            {name: "郭德纲", count: 100}
        ],
        socialContacts: [
            {name: "hfcc8685@t", type: "twitter"},
            {name: "hfcc8685@g", type: "github"},
            {name: "hfcc8685@weibo", type: "weibo"},
            {name: "hfcc8685@weixin", type: "weixin"}
        ],
        lovedList: [
            {
                time: "2016-06-01",
                title: "光辉岁月",
                link: "http://google.com",
                description: "非常喜欢这首歌曲",
                tags: ["beyond"]
            },
            {
                time: "2016-06-01",
                title: "光辉岁月",
                link: "",
                description: "非常喜欢这首歌曲",
                tags: ["郭德纲"]
            }
        ]
    };
    ctx.body = user;
});

router.get('/users/:id/following', function(ctx, next){
    var data = {
        lovedTags:[
            {name: "music", count: 50},
            {name: "video", count: 100}
        ],
        lovedTags: [
            {name: "beyond", count: 10},
            {name: "郭德纲", count: 100}
        ],
        lovedList: [
            {
                time: "2016-06-01",
                title: "光辉岁月",
                link: "",
                description: "非常喜欢这首歌曲",
                tags: ["beyond"],
                userName: 'cuican',
                userId: 1
            },
            {
                time: "2016-06-01",
                title: "光辉岁月",
                link: "http://google.com",
                description: "非常喜欢这首歌曲",
                tags: ["郭德纲"],
                userName: 'hanfeng',
                userId: 2
            }
        ]
    };
    ctx.body = data;
});

router.get('/users/:id/userlist', function(ctx, next){
    var userList = [
            {
                id: 1,
                name: "cuican",
                description: "developer",
                lovedCount: 5000,
                followerCount: 1000,
                lovedTags:[
                    {name: "music", count: 50}
                ]
            },
            {
                id: 2,
                name: "cuican",
                description: "developer",
                lovedCount: 5000,
                followerCount: 1000,
                lovedTags:[
                    {name: "music", count: 50}
                ]
            },
            {
                id: 3,
                name: "cuican",
                description: "developer",
                lovedCount: 5000,
                followerCount: 1000,
                lovedTags:[
                    {name: "music", count: 50}
                ]
            },
            {
                id: 4,
                name: "cuican",
                description: "developer",
                lovedCount: 5000,
                followerCount: 1000,
                lovedTags:[
                    {name: "music", count: 50}
                ]
            },
            {
                id: 5,
                name: "cuican",
                description: "developer",
                lovedCount: 5000,
                followerCount: 1000,
                lovedTags:[
                    {name: "music", count: 50}
                ]
            },
        ];
    ctx.body = userList;
})

router.get('/tags', function(ctx, next) {
    var tagList = [
        {
            id: 1,
            name: "music",
            description: "music music music music",
            lovedCount: 5000,
            followerCount: 1000
        },
        {
            id: 2,
            name: "music",
            description: "music music music music",
            lovedCount: 5000,
            followerCount: 1000
        },
        {
            id: 3,
            name: "music",
            description: "music music music music",
            lovedCount: 5000,
            followerCount: 1000
        },
        {
            id: 4,
            name: "music",
            description: "music music music music",
            lovedCount: 5000,
            followerCount: 1000
        },
        {
            id: 5,
            name: "music",
            description: "music music music music",
            lovedCount: 5000,
            followerCount: 1000
        },
    ];
    ctx.body = tagList;
});

router.get('*', co.wrap(function *(ctx, next){
    yield send(ctx, 'webapp/index.html');
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);