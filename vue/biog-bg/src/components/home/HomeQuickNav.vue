<template>
    <div class="home-quick-nav">
        <p class="home-quick-nav-title">快速开始 / 便捷导航</p>
        <div class="operation-wrap">
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a href="#">操作一</a>
            <a-button icon="plus" ghost size="small" type="primary">添加</a-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    },
    mounted(){
        
    }
};
</script>

<style lang="scss">
.home-quick-nav {
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .home-quick-nav-title {
        line-height: 50px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 0;
    }
    .operation-wrap{
        padding: 15px 5px;
        a{
            color: #666;
            display: inline-block;
            line-height: 32px;
            padding: 0 15px;
        }
    }
}
</style>