<template>
    <a-layout-sider width="200" style="height: calc(100vh - 64px)" :trigger="null" collapsible v-model="siderCollapsed">
        <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            :style="{ height: '100%', borderRight: 0, }"
        >
            <a-sub-menu v-for="(item,index) in siderList" :key="index">
                <span slot="title">
                    <a-icon :type="item.title.icon" />
                    <span>{{ item.title.text }}</span>
                </span>
                <a-menu-item v-for="son in item.item" :key="son.url">
                    <a-icon type="smile" />{{ son.text }}
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return{
            siderList:[
                {
                    title: {
                        icon: 'dashboard',
                        text: '分析监控'
                    },
                    item: [
                        {
                            text: '分析页',
                            url: '/fxy'
                        },{
                            text: '监控页',
                            url: '/jky'
                        },{
                            text: '工作台',
                            url: '/gzt'
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapState(['siderCollapsed'])
    },
    methods: {
        ...mapMutations(['setSiderCollapsed']),
        onClick() {
            this.setSiderCollapsed( !this.siderCollapsed );
        }
    }
};
</script>

<style>
</style>