<template>
    <a-upload-dragger
        name="file"
        class="avatar-uploader-file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
    >
        <p class="ant-upload-drag-icon upload-file-icon">
            <a-icon type="inbox" />
        </p>
        <p class="uploader-file-text">上传音乐或者视屏文件</p>
    </a-upload-dragger>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        handleChange(info) {
            const status = info.file.status;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                this.$message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        }
    }
};
</script>
<style lang="scss">
.avatar-uploader-file{
    .ant-upload{
        height: 128px;
        padding-top: 20px;
        .upload-file-icon{
            margin-bottom: 10px!important;
        }
        .uploader-file-text{
            font-size: 13px;
            color: #999;
            padding: 0 150px;
        }
    }
}
</style>