import router from "./router";
import store from './store'

router.beforeEach((to, from, next) => {
    const user = store.state.userInfo.user;
    if (!user && to.path !== '/login') {
        router.push('/login')
    }
    if (user && to.path === '/login') {
        router.push('/')
    }
    next();
})