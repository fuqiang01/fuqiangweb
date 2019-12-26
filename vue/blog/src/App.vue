<template>
    <div class="app" ref="app" @scroll="onAppScroll">
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
        ...mapMutations(["setAppDom","setDistanceFromBottom"]),
        onAppScroll(e){
            const number = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
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
    background: url("./assets/img/home_bg.jpg");
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
}
</style>
