<template>
    <div :class="['comments',aboutBgWhite && 'bg-white']">
        <CommentBox />
        <CommentItem :commentsData="commentsData"/>
    </div>
</template>

<script>
import CommentBox from "./CommentBox";
import CommentItem from "./CommentItem";
import {mapState} from 'vuex'
import Api from '@/api'
export default {
    props: ["bgWhite"],
    components: {
        CommentItem,
        CommentBox
    },
    data() {
        return {
            commentsData: []
        };
    },
    computed: {
        ...mapState(['aboutBgWhite'])
    },
    mounted(){
        const self = this;
        Api.getComments()
            .then( res => {
                self.commentsData = res.data.data;
            })
    }
};
</script>

<style lang="scss">
.comments {
    color: #fff;
    padding: 30px;
    border-radius: 5px;
    .ant-comment-content-author-name > * {
        color: #fff;
    }
    .btn-like {
        margin-right: 10px;
    }
    &.bg-white {
        background: #fff;
        color: #4d4d4d;
        .ant-comment-content-author-name > * {
            color: #4d4d4d;
        }
    }
}
</style>