import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

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
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
    },
    {
        path: '/purchase',
        name: 'purchase',
        component: () => import(/* webpackChunkName: "about" */ './views/Purchase.vue')
    },
    {
        path: '/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "about" */ './views/Sales.vue')
    }
  ]
})
