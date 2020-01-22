<template>
    <div class="hoome-comment-item bg-white">
        <a-comment v-for="(item) in commentsData" :key="item.id">
            <a-avatar shape="square" :src="item.photoSrc" icon="user" slot="avatar" />
            <span slot="author">{{ item.name }}</span>
            <span slot="datetime">{{ myGetTime(item.timeStamp) }}</span>
            <p slot="content" class="comments-content">{{ item.comment }}</p>
        </a-comment>
    </div>
</template>

<script>
import myGetTime from "@/util/myGetTime.js";
export default {
    props: ["commentsData"],
    data() {
        return {
            myGetTime
        };
    }
};
</script>

<style lang="scss">
.hoome-comment-item {
    .comments-content {
        line-height: 23px;
        color: #4d4d4d;
    }
    .ant-comment-content-author-name > * {
        color: #4d4d4d;
    }
}
</style>