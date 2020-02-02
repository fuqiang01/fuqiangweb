import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeCon from '@/components/HomeCon.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '',
          name: 'homeCon',
          component: HomeCon
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
