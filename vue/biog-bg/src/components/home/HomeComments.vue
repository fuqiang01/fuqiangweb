<template>
    <div class="home-comments">
        <HomeCommentItem :commentsData="commentsData" />
    </div>
</template>

<script>
import HomeCommentItem from '@/components/comments/HomeCommentItem'
import Api from '@/api'
export default {
    components: {
        HomeCommentItem
    },
    data(){
        return{
            commentsData: []
        }
    },
    methods: {
        queryComments(){
            Api.getComments()
                .then( res => {
                    this.commentsData = res.data.data;
                })
        }
    },
    mounted(){
        this.queryComments();
    }
}
</script>

<style>
.home-comments{
    background: #fff;
    padding: 20px;
}
</style>