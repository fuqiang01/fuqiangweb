<template>
    <div class="article-list-header">
        <div class="header-nav">
            <a-radio-group
                :defaultValue="articleFilterConditions.origin"
                @change="originChange"
                size="small"
                class="radio-btn-one"
                buttonStyle="solid"
            >
                <a-radio-button value="originAll" class="radio-btn">全部</a-radio-button>
                <a-radio-button value="original" class="radio-btn">原创</a-radio-button>
                <a-radio-button value="reprint" class="radio-btn">转载</a-radio-button>
            </a-radio-group>
            <br />
            <a-radio-group
                :defaultValue="articleFilterConditions.type"
                @change="typeChange"
                size="small"
                buttonStyle="solid"
            >
                <a-radio-button value="typeAll" class="radio-btn">全部</a-radio-button>
                <a-radio-button value="knowledge" class="radio-btn">知识点</a-radio-button>
                <a-radio-button value="article" class="radio-btn">文章</a-radio-button>
                <a-radio-button value="music" class="radio-btn">音乐</a-radio-button>
                <a-radio-button value="video" class="radio-btn">视屏</a-radio-button>
                <a-radio-button value="talk" class="radio-btn">毒鸡汤</a-radio-button>
            </a-radio-group>
        </div>
        <a-auto-complete :dataSource="dataSource" @select="onSelect" @search="handleSearch">
            <a-input-search
                placeholder="标题，关键词，描述"
                style="width: 300px"
                @search="routerPush"
                v-model="info"
                @pressEnter="routerPush"
            />
        </a-auto-complete>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            dataSource: []
        };
    },
    computed: {
        ...mapState(["articleFilterConditions"]),
        info: {
            get() {
                return this.articleFilterConditions.info;
            },
            set(value) {
                this.setArticleFilterConditions({ info: value });
            }
        }
    },
    methods: {
        ...mapActions(["queryArticleList"]),
        ...mapMutations(["setArticleFilterConditions"]),
        originChange(e) {
            const val = e.target.value;
            this.setArticleFilterConditions({origin: val});
            this.routerPush();
        },
        typeChange(e) {
            const val = e.target.value;
            this.setArticleFilterConditions({type: val});
            this.routerPush();
        },
        handleSearch(value) {
            this.dataSource = !value
                ? []
                : [value, value + value, value + value + value];
        },
        onSelect(value) {
            console.log("onSelect", value);
        },
        routerPush() {
            this.$router.push(
                `/list?origin=${this.articleFilterConditions.origin}&type=${this.articleFilterConditions.type}&info=${this.articleFilterConditions.info}`
            );
            this.queryArticleList();
        }
    }
};
</script>

<style lang="scss">
.article-list-header {
    background: #fff;
    margin: 15px 15px 5px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .radio-btn-one {
        margin-bottom: 5px;
    }
    .radio-btn {
        margin: 0 5px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        &::before {
            display: none;
        }
    }
}
</style>