<template>
    <div class="my-list">
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
            <div slot="footer">
                <p class="list-footer-text">
                    {{ originText + typeText + (info ? '的' + info : '') }}共查询到
                    <b>{{ listData.length }}</b> 条信息
                </p>
            </div>
            <a-list-item slot="renderItem" slot-scope="item" :key="item.id">
                <MyListItem :data="item" />
            </a-list-item>
        </a-list>
    </div>
</template>
<script>
import MyListItem from "./MyListItem";
import Api from "@/api";
export default {
    components: {
        MyListItem
    },
    data() {
        return {
            listData: [],
            pagination: {
                showQuickJumper: true,
                onChange: page => {
                    console.log(page);
                },
                pageSize: 7
            },
            origin: "originAll",
            type: "typeAll",
            info: ""
        };
    },
    computed: {
        originText() {
            switch (this.origin) {
                case "original":
                    return "原创";
                case "reprint":
                    return "转载";
                default:
                    return "";
            }
        },
        typeText() {
            switch (this.type) {
                case "knowledge":
                    return "知识点";
                case "article":
                    return "文章";
                case "music":
                    return "音乐";
                case "video":
                    return "视屏";
                case "talk":
                    return "毒鸡汤";
                default:
                    return "";
            }
        }
    },
    methods: {
        queryContentList() {
            Api.getContentList().then(res => {
                this.listData = res.data;
                console.log(res.data);
            });
        }
    },
    mounted() {
        this.queryContentList();
        this.origin = this.$route.query.origin;
        this.type = this.$route.query.type;
        this.info = this.$route.query.info;
    }
};
</script>

<style lang="scss">
.my-list {
    .ant-list-item-content {
        margin-bottom: 0;
        padding: 0 5px;
    }
    .list-footer-text {
        color: #777;
        b {
            color: #333;
        }
    }
}
</style>