<template>
    <div :class="['comment-item',aboutBgWhite && 'bg-white']">
        <div class="comment-item-i" v-for="(item) in commentsData" :key="item.id">
            <a-comment>
                <a-avatar shape="square" :src="item.photoSrc" icon="user" slot="avatar" />
                <span slot="author">{{ item.name }}</span>
                <span slot="datetime">{{ myGetTime(item.timeStamp) }}</span>
                <p slot="content" class="comments-content">
                    <span v-if="item.parent" class="parent-name">@{{ item.parent.name }}</span>
                    {{ item.comment }}
                </p>
                <template slot="actions">
                    <span class="btn-like">
                        <a-button
                            ghost
                            @click="onLike(item.id)"
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
                            @click="onReply(item.id)"
                        >回复</a-button>
                    </span>
                </template>
                <CommentBox
                    v-if="item.showCommentBox"
                    :parentId="item.id"
                    @close="onReply(item.id)"
                />
                <template v-if="item.children && item.children.length > 0">
                    <comment-item :commentsData="item.children" />
                </template>
            </a-comment>
        </div>
    </div>
</template>

<script>
import myGetTime from "@/util/myGetTime.js";
import CommentBox from "./CommentBox";
import { mapState, mapMutations, mapActions } from "vuex";
import Api from "@/api";
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
        ...mapMutations(["setCommentsDate"]),
         ...mapActions(['queryComments']),
        // 用来处理commentData的数据，把id为某一个id的数据改成需要的数据
        handleCommentsData(id, callBack) {
            const commentsArr = this.$store.state.commentsData;
            recursiveArr(commentsArr);
            function recursiveArr(arr) { // 递归函数，找到对应id的对象
                arr.forEach(ele => {
                    if (ele.id === id) {
                        callBack(ele);
                    } else {
                        if (ele.children && ele.children.length > 0) {
                            recursiveArr(ele.children);
                        }
                    }
                });
            }
            this.setCommentsDate(commentsArr); // 将修改好的新commentsData数据替换原来的
        },
        onLike(id) {
            this.handleCommentsData(id, item => {
                if (item.isLike) {
                    item.likeNumber = item.likeNumber - 1;
                    Api.cancelLikeByComment(id);
                } else {
                    item.likeNumber = item.likeNumber + 1;
                    Api.giveLikeByComment(id);
                }
                item.isLike = !item.isLike;
            });
        },
        onReply(id) {
            this.handleCommentsData(id, item => {
                item.showCommentBox = !item.showCommentBox;
            })
        }
    },
    mounted() {}
};
</script>

<style lang="scss">
.comment-item {
    border-radius: 5px;
    .ant-comment-avatar img {
        border-radius: 0;
    }
    .comments-content {
        line-height: 23px;
        color: #fff;
        .parent-name {
            color: #1e90ff;
        }
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