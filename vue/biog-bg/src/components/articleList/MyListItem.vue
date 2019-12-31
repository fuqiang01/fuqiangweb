<template>
    <div class="my-list-item">
        <p class="item-title">{{ data.title || ( data.songName + ' —— ' + data.singer) }}</p>
        <div class="date-wrap">
            <a-icon type="clock-circle" />
            <span>{{ data.date }}</span>
            <a-icon type="like" />
            <span>{{ data.like }}</span>
            <a-icon type="message" />
            <span>{{ data.messageLen }}</span>
            <a-icon type="appstore" />
            <span>{{ data.type }}</span>
            <a-icon type="heat-map" />
            <span>
                <a
                    :href="item.url || 'javaScript:void(0)'"
                    v-for="item in data.keywords"
                    :key="item.text"
                >{{ item.text }}</a>
            </span>
            <a href="#">
                <a-icon type="link" />
                <span>查看</span>
            </a>
            <a href="#">
                <a-icon type="edit" />
                <span>编辑</span>
            </a>
            <a href="#">
                <a-icon type="delete" />
                <span>删除</span>
            </a>
            <a-rate :defaultValue="data.score" allowHalf disabled />
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"]
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