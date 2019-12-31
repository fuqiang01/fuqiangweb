<template>
    <div class="article-list">
        <ArticleLiseHeader />
        <div class="list-wrap">
            <MyList />
        </div>
    </div>
</template>

<script>
import ArticleLiseHeader from '@/components/articleList/ArticleListHeader'
import MyList from '@/components/articleList/MyList'
export default {
    components: {
        ArticleLiseHeader,
        MyList
    }
}
</script>

<style>
.list-wrap{
    background: #fff;
    margin: 0 15px 15px;
    padding: 20px 20px 30px;
}
</style>