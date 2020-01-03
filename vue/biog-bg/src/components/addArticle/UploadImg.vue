<template>
    <a-upload
        name="avatar"
        listType="picture-card"
        class="avatar-uploader-img"
        :showUploadList="false"
        :multiple="true"
        :beforeUpload="beforeUpload"
        @change="handleChange"
    >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">上传图片</div>
        </div>
    </a-upload>
</template>

<script>
import {mapMutations} from 'vuex'
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}
export default {
    data() {
        return {
            loading: false,
            imageUrl: ""
        };
    },
    methods: {
        ...mapMutations(['setFromData']),
        handleChange(info) {
            console.log(info)
            if (info.file.status === "uploading") {
                this.loading = true;
                return;
            }
            if (typeof info.file.originFileObj === 'object') {
                getBase64(info.file.originFileObj, imageUrl => {
                    this.imageUrl = imageUrl;
                    this.loading = false;
                });
            }
        },
        beforeUpload(file) {
            this.loading = true;
            this.setFromData({ imgFileData: file });
            console.log(file)
            getBase64(file, imageUrl => {
                    this.imageUrl = imageUrl;
                    this.loading = false;
                });
            return false;
            // const isJPG = file.type === "image/jpeg";
            // if (!isJPG) {
            //     this.$message.error("You can only upload JPG file!");
            // }
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isLt2M) {
            //     this.$message.error("Image must smaller than 2MB!");
            // }
            // return isJPG && isLt2M;
        }
    }
};
</script>

<style lang="scss">
.avatar-uploader-img {
    .ant-upload {
        width: 128px;
        height: 128px;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }
    .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
}
</style>