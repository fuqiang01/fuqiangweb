<template>
    <div id="app">
        <a-spin :spinning="$store.state.rootLoading">
            <router-view></router-view>
        </a-spin>
    </div>
</template>
<script>
export default {
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
