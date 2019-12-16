<template>
    <div class="app">
        <!-- <Topbar /> -->
        <MyHeader />
        <div class="content">
            <router-view />
        </div>
        <div class="guestbook"></div>
        <div class="footer"></div>
    </div>
</template>

<script>
// import Topbar from '@/components/topbar/Topbar';
import MyHeader from '@/components/header/MyHeader';
export default {
    components: {
        // Topbar,
        MyHeader,
    }
}
</script>

<style lang="scss">
    .app{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('./assets/img/home_bg.jpg');
        background-size: cover;
        .content{
            width: 1200px;
            margin: 0 auto;
        }
    }
</style>
