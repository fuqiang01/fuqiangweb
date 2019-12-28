<template>
    <div class='comment-item'>
        <div class="comment-item-i" v-for="(item,index) in commentsData" :key="item.id">
            <a-comment>
                <a-avatar shape="square" :src="item.photo" :alt="item.name" slot="avatar" />
                <span slot="author">{{ item.name }}</span>
                <span slot="datetime">{{ myGetTime(item.date) }}</span>
                <p slot="content" class="comments-content">{{ item.content }}</p>
                <template slot="actions">
                    <span class="btn-like">
                        <a-button
                            ghost
                            @click="onLike(index)"
                            type="primary"
                        >
                            <a-icon :theme="item.isLike ? 'filled' : 'outlined'" type="like" />
                            {{item.likeNumber}}
                        </a-button>
                    </span>
                    <span>
                        <a-button
                            icon="message"
                            type="primary"
                            ghost
                            @click="onReply(index)"
                        >回复</a-button>
                    </span>
                </template>
                <CommentBox v-if="item.showCommentBox" :parentId="item.id" @close="onReply(index)" />
            </a-comment>
        </div>
    </div>
</template>

<script>
import {myGetTime} from "@/util";
import CommentBox from "./CommentBox";
export default {
    props: ["commentsData"],
    components: {
        CommentBox
    },
    data() {
        return {
            myGetTime
        };
    },
    methods: {
        onLike(index) {
            const item = this.commentsData[index];
            if (item.isLike) {
                item.likeNumber = item.likeNumber - 1;
            } else {
                item.likeNumber = item.likeNumber + 1;
            }
            item.isLike = !item.isLike;
        },
        onReply(index) {
            const bool = this.commentsData[index].showCommentBox ? false : true;
            this.$set(this.commentsData[index],'showCommentBox', bool);
        }
    }
};
</script>

<style lang="scss">
.comment-item {
    border-radius: 5px;
    .comments-content {
        line-height: 23px;
        color: #4d4d4d;
    }
    .ant-comment-content-author-name > * {
        color: #4d4d4d;
    }
    .btn-like {
        margin-right: 10px;
    }
}
</style>