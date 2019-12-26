<template>
    <div class="header">
        <div class="header-nav">
            <router-link to="/">主页</router-link>
            <router-link :to="{name: 'home', params:{search: 'knowledge'}}">知识点</router-link>
            <router-link :to="{name: 'home', params:{search: 'entertainment'}}">影音娱乐</router-link>
            <router-link :to="{name: 'home', params:{search: 'article'}}">文章分享</router-link>
        </div>
        <div class="input-wrap">
            <a-input-search
                placeholder="标题，关键词，描述"
                style="width: 250px"
                v-model="searchValue"
                @search="onSearch"
            />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchValue: ''
        }
    },
    methods: {
        onSearch(value) {
            this.$router.push(`/${value}`);
            this.searchValue = '';
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
    .input-wrap{
        margin-right: 20px;
    }
}
</style>