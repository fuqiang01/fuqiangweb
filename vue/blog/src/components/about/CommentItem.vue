<template>
    <div :class="['comment-item',aboutBgWhite && 'bg-white']">
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
                            :type="aboutBgWhite ? 'primary' : 'default'"
                        >
                            <a-icon :theme="item.isLike ? 'filled' : 'outlined'" type="like" />
                            {{item.likeNumber}}
                        </a-button>
                    </span>
                    <span>
                        <a-button
                            icon="message"
                            :type="aboutBgWhite ? 'primary' : 'default'"
                            ghost
                            @click="onReply(index)"
                        >回复</a-button>
                    </span>
                </template>
                <CommentBox v-if="item.showCommentBox" :parentId="item.id" @close="onReply(index)" />
                <template v-if="item.children">
                    <comment-item :commentsData="item.children" />
                </template>
            </a-comment>
        </div>
    </div>
</template>

<script>
import myGetTime from "@/util/myGetTime.js";
import CommentBox from "./CommentBox";
import { mapState } from "vuex";
export default {
    props: ["commentsData"],
    name: "commentItem",
    components: {
        CommentBox
    },
    data() {
        return {
            myGetTime
        };
    },
    computed: {
        ...mapState(["aboutBgWhite"])
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
        color: #fff;
    }
    .ant-comment-content-author-name > * {
        color: #fff;
    }
    .btn-like {
        margin-right: 10px;
    }
    &.bg-white {
        .comments-content {
            color: #4d4d4d;
        }
        .ant-comment-content-author-name > * {
            color: #4d4d4d;
        }
    }
}
</style>