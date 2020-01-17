<template>
    <div class="comment-box">
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
                            type="primary"
                            @click="onClose"
                        >取消</a-button>
                    </span>
                </div>
            </div>
        </a-comment>
    </div>
</template>

<script>
import Api from '@/api';
export default {
    props: ["parentId"],
    data() {
        return {
            name: "",
            email: "",
            commentText: "",
            photo: ''
        };
    },
    methods: {
        uploadPhoto(formData){
            Api.setFileToCos(formData)
                .then(res => {
                    this.photo = res.data.url
                })
        },
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
            const data = {
                photo: this.photo,
                name: this.name || "匿名",
                email: this.email,
                content: this.commentText,
                parentId: this.parentId || 0
            };
            Api.addComment(data)
                .then(() => {
                    this.$message.success('评论成功！');
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
        border: 1px solid #aaa;
        color: #4d4d4d;
    }
    #photo-file {
        display: none;
    }
    .btn-wrap {
        display: flex;
        justify-content: space-between;
        .btn-wrap-left {
            color: #ccc;
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
}
</style>