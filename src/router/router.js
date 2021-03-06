import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import AuthGuard from './auth-guard'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
                // , offset: { x: 0, y: 10 }
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/o_nas',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Dashboard.vue'),
            beforeEnter: AuthGuard
        },
        {
            path: '/formularz',
            name: 'form',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Form.vue')
        },
        {
            path: '/sprzedaz',
            name: 'sales',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Sales.vue')
        },
        {
            path: '/wykresy',
            name: 'charts',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Charts.vue'),
            beforeEnter: AuthGuard
        },
        {
            path: '/profil',
            name: 'profile',
            component: () => import(/* webpackChunkName: "about" */ '@/views/UserProfile.vue')
        },
        {
            path: '/wylogowano',
            name: 'logout',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Logout.vue')
        },

        //wildcart
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;