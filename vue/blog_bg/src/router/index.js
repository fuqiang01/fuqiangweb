import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: 'list',
                name: 'list',
                component: () => import('../views/ArticleList.vue')
            },
            {
                path: 'add/:type',
                name: 'add',
                component: () => import('../views/AddArticle.vue')
            },
            {
                path: 'test',
                name: 'test',
                component: () => import('../views/Test.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router