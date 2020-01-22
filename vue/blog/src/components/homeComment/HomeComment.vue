<template>
    <div class="home-comment">
        <div class="open-comment-box" @click="openCommentBox">
            <a-icon type="message" />
        </div>
        <a-drawer
            title="评论/留言"
            placement="right"
            :closable="true"
            @close="onClose"
            :visible="visible"
            width="700"
        >
            <CommentBox :bgWhite="true" />
            <HomeCommentItem :commentsData="commentsData" />
        </a-drawer>
    </div>
</template>

<script>
import CommentBox from "@/components/about/CommentBox";
import HomeCommentItem from "@/components/homeComment/HomeCommentItem";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        CommentBox,
        HomeCommentItem
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        ...mapState([ "commentsData"]),
    },
    methods: {
        ...mapActions(['queryComments']),
        onClose() {
            this.visible = false;
        },
        openCommentBox() {
            this.visible = true;
        },
        onRelease() {
            this.queryComments();
        }
    },
    mounted() {
        this.queryComments();
    }
};
</script>

<style>
.open-comment-box {
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 40px;
    height: 40px;
    z-index: 10;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 19px;
}
</style>