export default {
    singular: true, // 使用 src/page 而非默认的 src/pages
    // 显式配置 routes 则禁掉「约定式路由」
    // 「配置式路由」
    routes: [{
        path: '/',
        component: './HelloWorld', // 相对于 page 目录的路径
    }],

    plugins: [
        ['umi-plugin-react', {
          // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
};