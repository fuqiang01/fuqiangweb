import Vue from 'vue';
import Router from 'vue-router';
import StuList from './views/StuList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass : 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'stuList',
      component: StuList,
    },
    {
      path: '/addStu',
      name: 'addStu',
      component: () => import('./views/AddStu.vue'),
    },
  ],
});
