import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ArticleList.vue')
  },
  {
    path: '/add/:type',
    name: 'add',
    component: () => import('../views/AddArticle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
