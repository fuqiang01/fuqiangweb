<template>
    <div class="header">
        <div class="header-nav">
            <a href="#">主页</a>
            <a href="#">知识点</a>
            <a href="#">影音娱乐</a>
            <a href="#">文章分享</a>
        </div>
        <div class="input-wrap">
            <a-input-search
                placeholder="标题，关键词，描述"
                style="width: 250px"
                @search="onSearch"
            />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onSearch(value) {
            console.log(value);
        }
    }
};
</script>

<style lang="scss">
.header {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-nav{
        a{
            display: inline-block;
            padding: 0px 20px;
            line-height: 35px;
            color: #fff;
            font-size: 15px;
        }
    }
}
</style>