export default {
    singular: true, // 使用 src/page 而非默认的 src/pages
    // 显式配置 routes 则禁掉「约定式路由」
    // 「配置式路由」
    routes: [{
        path: '/',
        component: '../layout', // 相对于 page 目录的路径
        routes: [
            { path: '/', component: './HelloWorld' },
            { path: 'helloworld', component: './HelloWorld' },
            { path: 'puzzlecards', component: './PuzzleCards' },
            {
                path: '/dashboard',
                routes: [
                  { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                  { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                  { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            { path: 'list', component: 'list' },
        ]
    }],

    /*
    proxy: {
        '/dev': {
            target: 'https://official-joke-api.appspot.com',
            changeOrigin: true,
            pathRewrite: { '^/dev': '' }
        }
    },
    */

    plugins: [
        ['umi-plugin-react', {
          // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
          antd: true,   // 引入 antd
          dva: true,    // 引入 dva
        }],
    ],
};