import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('views/home/home')), 'Home')

const City = r => require.ensure([], () => r(require('views/city/city')), 'City')

const Msite = r => require.ensure([], () => r(require('views/msite/msite')), 'Msite')

const Search = r => require.ensure([], () => r(require('views/search/search')), 'Search')

const Order = r => require.ensure([], () => r(require('views/order/order')), 'Order')

const Profile = r => require.ensure([], () => r(require('views/profile/profile')), 'Profile')

const Find = r => require.ensure([], () => r(require('views/find/find')), 'Find')

export default new Router({
    mode: routerMode,
    routes: [
        // 地址为空时，跳转home页面
        {
            path: '/',
            component: Home
        },
        // 首页城市列表页
        {
            path: 'home',
            component: Home
        },
        // 当前选择城市页
        {
            path: '/city/:cityid',
            component: City
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