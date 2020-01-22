<template>
    <div :class="['comment-box',isBgWhite && 'bg-white']">
        <a-comment>
            <div class="photo-wrap" slot="avatar">
                <a-avatar shape="square" icon="user" :src="photo" @click="photoClick" />
                <input
                    type="file"
                    @change="photoFileChange"
                    accept="image/*"
                    id="photo-file"
                    ref="photoFile"
                />
            </div>
            <a-input slot="author" v-model="name" allowClear placeholder="称呼" />
            <a-input slot="datetime" v-model="email" allowClear placeholder="邮箱" />
            <a-textarea
                slot="content"
                @pressEnter="onKeyUp"
                v-model="commentText"
                allowClear
                placeholder="Basic usage"
                :rows="4"
            />
            <div class="btn-wrap" slot="actions">
                <div class="btn-wrap-left">
                    <a-icon type="smile" />
                    <span>Ctrl + Enter 发表</span>
                </div>
                <div class="btn-wrap-right">
                    <span class="release-btn">
                        <a-button type="primary" @click="onRelease">发布</a-button>
                    </span>
                    <span>
                        <a-button
                            ghost
                            :type="isBgWhite ? 'primary' : 'default'"
                            @click="onClose"
                        >取消</a-button>
                    </span>
                </div>
            </div>
        </a-comment>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Api from '@/api';
export default {
    props: ["parentId", "bgWhite"],
    data() {
        return {
            name: "",
            email: "",
            commentText: "",
            photo: ''
        };
    },
    computed: {
        ...mapState(["aboutBgWhite"]),
        isBgWhite(){
            return (this.aboutBgWhite || this.bgWhite);
        }
    },
    methods: {
        ...mapActions(['queryComments']),
        onClose() {
            this.commentText = "";
            this.$emit("close");
        },
        onKeyUp(e) {
            if (e.ctrlKey) {
                this.onRelease();
            }
        },
        onRelease() {
            if (!this.commentText) {
                this.$message.warning("评论不能为空！");
                return;
            }
            const blogId = this.$route.params.id;
            const data = {
                photo: this.photo,
                name: this.name || "匿名",
                email: this.email,
                content: this.commentText,
                parentId: this.parentId || 0,
                blogId
            };
            Api.addComment(data)
                .then(() => {
                    this.$message.success('评论成功！');
                    this.queryComments(this.$route.params.id);
                })
            this.$emit("close");
            this.name = "";
            this.email = "";
            this.commentText = "";
            this.photo = "";
        },
        photoClick() {
            this.$refs.photoFile.click();
        },
        photoFileChange() {
            const file = this.$refs.photoFile.files[0];
            const formData = new FormData();
            formData.append('file', file);
            this.uploadPhoto(formData)
        },
        uploadPhoto(formData){
            Api.setFileToCos(formData)
                .then(res => {
                    this.photo = res.data.url
                })
        }
    }
};
</script>

<style lang="scss">
.comment-box {
    .ant-comment-content-author {
        height: 35px;
    }
    .ant-comment-content-author-time {
        width: 300px;
    }
    .ant-comment-actions {
        li {
            width: 100%;
        }
    }
    input,
    textarea {
        background-color: transparent;
        border: none;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        color: #eee;
    }
    #photo-file {
        display: none;
    }
    .btn-wrap {
        display: flex;
        justify-content: space-between;
        .btn-wrap-left {
            color: #fff;
            line-height: 32px;
            span {
                padding-left: 10px;
            }
        }
        .btn-wrap-right {
            .release-btn {
                margin-right: 10px;
            }
        }
    }
    &.bg-white {
        input,
        textarea {
            border: 1px solid #e0e0e0;
            color: #4d4d4d;
            box-shadow: none;
        }
    }
}
</style>