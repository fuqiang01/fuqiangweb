<template>
    <div class="my-list-item">
        <p class="item-title">{{ data.title || ( data.songName + ' —— ' + data.singer) }}</p>
        <div class="date-wrap">
            <a-icon type="clock-circle" />
            <span>{{ myGetTime(data.timeStamp) }}</span>
            <a-icon type="like" />
            <span>{{ data.likeNumber }}</span>
            <a-icon type="message" />
            <span>{{ data.messageNumber }}</span>
            <a-icon type="appstore" />
            <span>{{ data.styleType }}</span>
            <a-icon type="heat-map" />
            <span>
                <a href="javaScript:void(0)" v-for="(item, index) in data.tags" :key="index">{{ item }}</a>
            </span>
            <a :href="`http://localhost:8081/about/${data.id}`" target="_blank">
                <a-icon type="link" />
                <span>查看</span>
            </a>
            <a href="javaScript:void(0)" @click="editorBlog">
                <a-icon type="edit" />
                <span>编辑</span>
            </a>
            <a href="javaScript:void(0)" @click="deleteBlog">
                <a-icon type="delete" />
                <span>删除</span>
            </a>
            <a-rate :defaultValue="data.scoresSum / data.scoresNumber" allowHalf disabled />
        </div>
    </div>
</template>

<script>
import Api from "@/api";
import {myGetTime} from '@/util'
import { mapActions, mapMutations } from "vuex";
export default {
    props: ["data"],
    data(){
        return{
            myGetTime
        }
    },
    methods: {
        ...mapMutations(["setFromData", "setRootLoading"]),
        ...mapActions(["queryArticleList"]),
        deleteBlog() {
            const hide = this.$message.loading("正在删除..", 0);
            Api.deleteBlog(this.data.id).then(() => {
                hide();
                this.queryArticleList(); // 重新请求文章列表
                this.$message.success("删除成功！");
            });
        },
        editorBlog() {
            this.setRootLoading(true); // 打开全局加载窗口
            Api.getBlogById(this.data.id).then(res => {
                this.setFromData({
                    ...res.data,
                    imgFileData: res.data.imgSrc.split('/').pop(), // 这里返回的是带有域名的地址，而我们只需要文件名
                    musicVideoData: res.data.dataFile.split('/').pop(),
                    richText: res.data.content
                });
                this.$router.push(`/add/${res.data.styleType}`);
                this.setRootLoading(false);
            });
        }
    }
};
</script>

<style lang="scss">
.my-list-item {
    .item-title {
        margin-bottom: 5px;
        font-size: 15px;
        font-weight: bold;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .date-wrap {
        color: #aaa;
        span {
            margin: 0 20px 0 5px;
            color: ccc;
            a {
                padding: 0 8px;
                color: #aaa;
            }
        }
    }
}
</style>