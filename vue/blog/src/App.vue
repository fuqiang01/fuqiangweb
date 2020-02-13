<template>
    <div class="app" ref="app" @scroll="onAppScroll">
        <div class="home-loading-mask" v-if="$store.state.isLoading.contentList">
            <a-spin size="large"></a-spin>
        </div>
        <!-- <Topbar /> -->
        <MyHeader />
        <div class="content">
            <router-view />
        </div>
        <MyFooter />
        <a-back-top :target="()=>$refs.app" />
    </div>
</template>

<script>
// import Topbar from '@/components/topbar/Topbar';
import MyHeader from "@/components/header/MyHeader";
import MyFooter from "@/components/footer/MyFooter";
import { mapMutations } from "vuex";
export default {
    components: {
        // Topbar,
        MyHeader,
        MyFooter
    },
    methods: {
        ...mapMutations(["setAppDom", "setDistanceFromBottom"]),
        onAppScroll(e) {
            const number =
                e.target.scrollHeight -
                e.target.clientHeight -
                e.target.scrollTop;
            this.setDistanceFromBottom(number);
        }
    },
    mounted() {
        this.setAppDom(this.$refs.app);
    }
};
</script>

<style lang="scss">
.app {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("http://cos.fqiang.co/blog/home_bg.jpg");
    background-size: cover;
    overflow-y: auto;
    .content {
        width: 1200px;
        margin: 0 auto;
    }
    a,
    a:hover,
    a:active,
    a:focus {
        text-decoration: none;
    }
    .home-loading-mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255,255,255,.3);
        z-index: 999;
        text-align: center;
        padding-top: 100px;
    }
}
</style>
