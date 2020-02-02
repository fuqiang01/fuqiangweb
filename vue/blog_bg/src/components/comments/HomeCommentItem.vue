<template>
    <div class="comment-item">
        <div class="comment-item-i" v-for="item in commentsData" :key="item.id">
            <a-comment>
                <a-avatar
                    shape="square"
                    :src="item.photoSrc"
                    :alt="item.name"
                    slot="avatar"
                    icon="user"
                />
                <span slot="author">{{ item.name }}</span>
                <span slot="datetime">{{ myGetTime(item.timeStamp) }}</span>
                <p slot="content" class="comments-content">{{ item.comment }}</p>
                <template slot="actions">
                    <span class="btn-like">
                        <a-button ghost @click="onLike(item.id)" type="primary">
                            <a-icon :theme="item.isLike ? 'filled' : 'outlined'" type="like" />
                            {{item.likeNumber}}
                        </a-button>
                    </span>
                    <span>
                        <a-button icon="message" type="primary" ghost @click="onReply(item.id)">回复</a-button>
                    </span>
                    <span>
                        <a-button
                            icon="check-circle"
                            type="primary"
                            ghost
                            @click="onAudit(item.id)"
                        >确认审核</a-button>
                    </span>
                    <span>
                        <a-button icon="delete" type="primary" ghost @click="onDelete(item.id)">删除</a-button>
                    </span>
                </template>
                <CommentBox
                    v-if="item.showCommentBox"
                    :parentId="item.id"
                    @close="onReply(item.id)"
                />
            </a-comment>
        </div>
    </div>
</template>

<script>
import { myGetTime } from "@/util";
import CommentBox from "./CommentBox";
import { mapState, mapMutations } from "vuex";
import Api from "@/api";
export default {
    components: {
        CommentBox
    },
    data() {
        return {
            myGetTime
        };
    },
    computed: {
        ...mapState(["commentsData"])
    },
    methods: {
        ...mapMutations(["setCommentsDate"]),
        onLike(id) {
            const newData = this.commentsData.map(ele => {
                if (ele.id === id) {
                    if (ele.isLike) {
                        ele.likeNumber = ele.likeNumber - 1;
                        Api.cancelLikeByComment(id);
                    } else {
                        ele.likeNumber = ele.likeNumber + 1;
                        Api.giveLikeByComment(id);
                    }
                    ele.isLike = !ele.isLike
                }
                return ele;
            });
            this.setCommentsDate(newData);
        },
        onReply(id) {
            const newData = this.commentsData.map(ele => {
                if (ele.id === id) {
                    ele.showCommentBox = !ele.showCommentBox
                }
                return ele;
            })
            this.setCommentsDate(newData);
        },
        onAudit(id) {
            const arr = this.commentsData.filter(ele => ele.id !== id);
            this.setCommentsDate(arr);
            Api.commentAudit(id)
                .then(() => {
                    this.$message.success('已完成审核！');
                })
        },
        onDelete(id) {
            const arr = this.commentsData.filter(ele => ele.id !== id);
            this.setCommentsDate(arr);
            Api.deleteComment(id)
                .then(() => {
                    this.$message.success('删除成功！');
                })
        }
    },
    mounted() {}
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