<template>
    <a-layout-content :style="{ minHeight: '280px' }" >
        <div class="my-content-wrap">
            <router-view></router-view>
        </div>
    </a-layout-content>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-content-wrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: rgb(239, 239, 239);
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background: #bfbfbf;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #333;
    }
}
</style>