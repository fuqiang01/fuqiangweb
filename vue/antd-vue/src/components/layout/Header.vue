<template>
    <a-layout-header class="header">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt width="100%" />
        </div>
        <div class="icon-wrap">
            <a-icon
                class="trigger"
                :type="siderCollapsed ? 'menu-unfold' : 'menu-fold'"
                @click="onClick"
            />
        </div>
        <div class="right">
            <a-dropdown>
                <span class="bell" href="#">
                    <a-badge :count="1">
                        <a-icon type="bell" style="font-size: '30px'" />
                    </a-badge>
                </span>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown>
                <span class="user" href="#">
                    <a-badge dot><a-avatar shape="square" :size="40" icon="user"/></a-badge>
                    <span>Fu Qiang</span>
                </span>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(["siderCollapsed"])
    },
    methods: {
        ...mapMutations(["setSiderCollapsed"]),
        onClick() {
            console.log(11);
            this.setSiderCollapsed(!this.siderCollapsed);
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    .logo {
        width: 120px;
        height: 41px;
        margin: 11px 28px 11px 0;
        float: left;
        img {
            display: block;
        }
    }
    .icon-wrap {
        float: left;
        margin-left: 24px;
        .trigger {
            color: #fff;
            font-size: 18px;
        }
    }
    .right{
        float: right;
        .user{
            >span{
                color: #fff;
                margin-left: 10px;
                font-size: 15px;
            }
        }
        .bell{
            color: #fff;
        }
    }
}
</style>