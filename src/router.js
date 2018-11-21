import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/o_nas',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
        },
        {
            path: '/zakupy',
            name: 'purchase',
            component: () => import(/* webpackChunkName: "about" */ './views/Purchase.vue')
        },
        {
            path: '/sprzedaz',
            name: 'sales',
            component: () => import(/* webpackChunkName: "about" */ './views/Sales.vue')
        },
        {
            path: '/wykresy',
            name: 'charts',
            component: () => import(/* webpackChunkName: "about" */ './views/Charts.vue')
        },
        {
            path: '/profil',
            name: 'profile',
            component: () => import(/* webpackChunkName: "about" */ './views/UserProfile.vue')
        },
        {
            path: '/wylogowano',
            name: 'logout',
            component: () => import(/* webpackChunkName: "about" */ './views/Logout.vue')
        },

        //wildcart
        {
            path: '*',
            redirect: '/'
        }
    ]
})
