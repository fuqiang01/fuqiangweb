<template>
    <div class="my-list">
        <a-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="articleList">
            <div slot="footer">
                <p class="list-footer-text">
                    {{ originText + typeText + (articleFilterConditions.info ? '的' + articleFilterConditions.info : '') }}共查询到
                    <b>{{ articleSum }}</b> 条信息
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
import {mapActions, mapState} from 'vuex'
export default {
    components: {
        MyListItem
    },
    data() {
        return {
            pagination: {
                showQuickJumper: true,
                onChange: page => {
                    console.log(page);
                },
                pageSize: 7
            }
        };
    },
    computed: {
        ...mapState(['articleList', 'articleFilterConditions', 'articleSum']),
        originText() {
            switch (this.articleFilterConditions.origin) {
                case "original":
                    return "原创";
                case "reprint":
                    return "转载";
                default:
                    return "";
            }
        },
        typeText() {
            switch (this.articleFilterConditions.type) {
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
        ...mapActions(['queryArticleList']),
    },
    mounted() {
        this.queryArticleList();
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