import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/gsdl',
      name: 'gsdl',
      component: () => import('./views/Gsdl.vue')
    },
    {
      path: '/kjfw',
      name: 'kjfw',
      component: () => import('./views/Kjfw.vue')
    },
    {
      path: '/zscq',
      name: 'zscq',
      component: () => import('./views/Zscq.vue')
    },
    {
      path: '/gwtd',
      name: 'gwtd',
      component: () => import('./views/Gwtd.vue')
    },
    {
      path: '/cszx',
      name: 'cszx',
      component: () => import('./views/Cszx.vue')
    },
    {
      path: '/lxwm',
      name: 'lxwm',
      component: () => import('./views/Lxwm.vue')
    }
  ]
})
