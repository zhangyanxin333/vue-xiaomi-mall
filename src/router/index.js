import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
//一级路由
import Cart from 'pages/cart/cart';
import Group from 'pages/group/group';
import Index from 'pages/index/index';
import Profile from 'pages/profile/profile';
//二级路由
import Mianshui from 'pages/index/mianshui';
import Motherbaby from 'pages/index/motherbaby';
import Qingshe from 'pages/index/qingshe';
import Pinpai from 'pages/index/pinpai';
//三级路由
import TodayTen from 'pages/index/TodayTen';
import TomorrowTen from 'pages/index/TomorrowTen';
import IndexItem from 'components/common/index-list/index-item';

//拼团的二级路由
import Item from 'pages/group/item';

//详情页
import HomeDetail from 'components/common/detail/home-detail';


import IndexList from 'components/common/index-list/index-list';

import Search from 'components/common/search/search'

const routes = [
    { 
        path: '/', 
        redirect:'/home'
    },
    {
        name:'home',
        path:'/home',
        component:Index,
        redirect:'/home/shouye',
        children:[
            {
                name:'shouye',
                path:'shouye',
                component:IndexList,
                redirect:'/home/shouye/today',
                children:[
                    {
                        name:'today',
                        path:'today',
                        component:TodayTen
                    },
                    {
                        name:'tomorrow',
                        path:'tomorrow',
                        component:TomorrowTen
                    }
                ]
            },
            {
                name:'mianshui',
                path:'mianshui',
                component:Mianshui,
            },
            {
                name:'motherbaby',
                path:'motherbaby',
                component:Motherbaby,
            },
            {
                name:'qingshe',
                path:'qingshe',
                component:Qingshe,
            },
            {
                name:'pinpai',
                path:'pinpai',
                component:Pinpai,
            }
        ]
    },
    {
        name:'group',
        path:'/group',
        component:Group,
        redirect:'/group/yiqituan/coutuan_home',
        children:[{
            path:'yiqituan/:tab',
            component:Item
        }
        ]
    },
    //test 详情页路由
    {
        name:'detail',
        path:'/detail',
        component:HomeDetail,
        children:[
            {
                path:'a/:item_id',
                component:HomeDetail
            }
        ]
    },
    {
        name:'cart',
        path:'/cart',
        component:Cart
    },
    {
        name:'profile',        
        path:'/profile',
        component:Profile,
        children:[
            {
                path:'singup',
                component:Profile
            },
            {
                path:'singin',
                component:Profile
            }
        ]
    },
    //搜索页路由
    {
        name:'search',
        path:'/search',
        component:Search
    },
    /* //登录页路由
    {
        name:'profile',
        path:'/singup',
        component:Profile
    } */
]

const router = new VueRouter({
    mode:'history',
    //base:'/dist/',
    routes
})


export default router


