import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'

Vue.use(Router)

const Msite = r => require.ensure([], () => r(require('views/msite/msite')), 'Msite')

const Search = r => require.ensure([], () => r(require('views/search/search')), 'Search')

const Order = r => require.ensure([], () => r(require('views/order/order')), 'Order')

const Profile = r => require.ensure([], () => r(require('views/profile/profile')), 'Profile')

const Find = r => require.ensure([], () => r(require('views/find/find')), 'Find')

export default new Router({
    mode: routerMode,
    routes: [
        {
            path: '/',
            component: Msite //首屏重定向
        },
        // 所有商铺列表页
        {
            path: '/msite',
            component: Msite
        },
        // 搜索页
        {
            path: '/search',
            component: Search
        },
        // 订单列表页
        {
            path: '/order',
            component: Order
        },
        // 个人信息页
        {
            path: '/profile',
            component: Profile
        },
        // 发现页
        {
            path: '/find',
            component: Find
        }
    ]
})