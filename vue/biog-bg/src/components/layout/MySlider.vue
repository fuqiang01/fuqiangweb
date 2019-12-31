<template>
    <a-layout-sider :trigger="null" collapsible v-model="sliderCollapsed">
        <div class="logo">
            <span>大爷来玩啊！</span>
        </div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
                <router-link to="/">
                    <a-icon type="radar-chart" />
                    <span>工作台</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="2">
                <router-link to="/list">
                    <a-icon type="bars" />
                    <span>文章列表</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="3">
                <router-link :to="{name: 'add', params: {type: 'plainText'}}">
                    <a-icon type="smile" />
                    <span>新增文章</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["sliderCollapsed"])
    }
};
</script>

<style>
.logo {
    height: 32px;
    /* background: rgba(255, 255, 255, 0.2); */
    margin: 16px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>