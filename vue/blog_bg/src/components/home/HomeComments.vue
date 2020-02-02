<template>
    <div class="home-comments">
        <HomeCommentItem />
    </div>
</template>

<script>
import HomeCommentItem from '@/components/comments/HomeCommentItem'
import {mapActions} from 'vuex'
export default {
    components: {
        HomeCommentItem
    },
    methods: {
        ...mapActions(['queryComments'])
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