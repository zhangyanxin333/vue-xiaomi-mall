// 用来配置路径问题
const path = require("path");

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components',resolve('./src/components'))
            .set('styles',resolve('./src/assets/styles'))
            .set('pages',resolve('./src/pages'))
            .set('utils',resolve('./src/utils'))
            .set('assets',resolve('./src/assets'))
    },
    //nginx 配置
    //baseUrl:'/dist/',
    devServer: {
        proxy: {
            //首页
            '/index/ajaxDealactList': {
                target: 'http://h5.jumei.com',
                changeOrigin: true,
            },
            //搜索框
            '/index/requestDelegate':{
                target:'https://h5.jumei.com',
                changeOrigin: true,                
            },
            //拼团
            '/yiqituan':{
                target:'http://s.h5.jumei.com',
                changeOrigin: true,                                
            },
            //母婴
            '/muandbaby/ajaxList':{
                target:'http://m.jumei.com',
                changeOrigin:true
            },
            //轻奢
            '/luxury/ajaxList':{
                target:'http://m.jumei.com',
                changeOrigin:true
            },
            //品牌特卖
            '/pop/ajaxGetList':{
                target:'http://m.jumei.com',
                changeOrigin:true
            },
            //详情页
            '/product/ajaxStaticDetail':{
                target:'http://h5.jumei.com',
                changeOrigin:true
            },
            '/product/ajaxDynamicDetail':{
                target:'http://h5.jumei.com',
                changeOrigin:true
            },
            //注册
            '/api':{
                target:'http://localhost:3000',
                changeOrigin:true
            },
            //搜索
            '/search/index':{
                target:'http://h5.jumei.com',
                changeOrigin:true
            }
        }
    }
}

