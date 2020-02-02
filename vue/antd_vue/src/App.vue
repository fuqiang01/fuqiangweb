<template>
    <a-layout>
        <MyHeader />
        <a-layout>
            <Sider />
            <Content />
        </a-layout>
    </a-layout>
</template>
<script>
import MyHeader from './components/layout/Header';
import Sider from './components/layout/Sider'; 
import Content from './components/layout/Content'; 
export default {
    data() {
        return {
            collapsed: false
        };
    },
    components: {
        MyHeader,
        Sider,
        Content
    }
};
</script>

<style>
</style>