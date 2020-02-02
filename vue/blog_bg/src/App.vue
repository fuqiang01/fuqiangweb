<template>
    <div id="app">
        <a-spin :spinning="$store.state.rootLoading">
            <Layout />
        </a-spin>
    </div>
</template>
<script>
import Layout from "@/layout/layout";
export default {
    components: {
        Layout
    }
};
</script>
<style lang="scss">
html,
body {
    width: 100%;
    height: 100%;
    #app {
        width: 100%;
        height: 100%;
    }
}
</style>
