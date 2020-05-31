<template>
    <div class="header">
        <div class="header-nav">
            <router-link to="/">主页</router-link>
            <router-link :to="{name: 'home', query:{type: 'knowledge'}}">知识点</router-link>
            <router-link :to="{name: 'home', query:{type: 'article'}}">文章</router-link>
            <!-- <router-link :to="{name: 'home', query:{type: 'music'}}">音乐</router-link>
            <router-link :to="{name: 'home', query:{type: 'video'}}">视屏</router-link> -->
            <router-link :to="{name: 'home', query:{type: 'talk'}}">毒鸡汤</router-link>
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
    data() {
        return {
            searchValue: ""
        };
    },
    methods: {
        onSearch(value) {
            this.$router.push({
                name: "home",
                query: { 
                    type: this.$route.query.type,
                    info: value 
                }
            });
            this.searchValue = "";
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
    .header-nav {
        a {
            display: inline-block;
            padding: 0px 20px;
            line-height: 35px;
            color: #fff;
            font-size: 15px;
        }
    }
    .input-wrap {
        margin-right: 20px;
    }
}
</style>