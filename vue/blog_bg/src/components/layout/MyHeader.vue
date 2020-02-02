<template>
    <a-layout-header class="my-header" style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="sliderCollapsed ? 'menu-unfold' : 'menu-fold'"
            @click="setSliderCollapsed(!sliderCollapsed)"
        />
        <div class="header-right-box">
            <a-badge :count="1" class="header-badge">
                <span class="header-bell-wrap">
                    <a-icon type="bell" />
                </span>
            </a-badge>
            <a-icon type="home" />
        </div>
    </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["sliderCollapsed"])
    },
    methods: {
        ...mapMutations(["setSliderCollapsed"])
    }
};
</script>

<style lang="scss">
.my-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-badge{
        margin-right: 30px;
    }
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
            color: #1890ff;
        }
    }
    .header-right-box {
        margin-right: 50px;
        display: flex;
        align-items: center;
        font-size: 16px;
        .header-bell-wrap {
            display: inline-block;
            width: 20px;
            font-size: 16px;
        }
    }
}
</style>