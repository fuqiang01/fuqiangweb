<template>
    <div class="home">
        <div v-for="item in contentList" :key="item.id">
            <PlainText v-if="item.styleType === 'plainText'" :data="item" />
            <SmallImg v-else-if="item.styleType === 'smallImg'" :data="item" />
            <BigImg v-else-if="item.styleType === 'bigImg'" :data="item" />
            <Music v-else-if="item.styleType === 'music'" :data="item" />
            <MyVideo v-else-if="item.styleType === 'video'" :data="item" />
            <Talk v-else-if="item.styleType === 'talk'" :data="item" />
        </div>
        <div class="home-bottom-loading" v-if="isSold">
            <template v-if="isLastPage">
                <a-icon type="smile" />
                <span>别看了，就这些...</span>
            </template>
            <template v-else>
                <a-icon type="loading" />
                <span>玩命加载中...</span>
            </template>
        </div>
        <!-- <HomeComment /> -->
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import PlainText from "@/components/contentlist/PlainText";
import SmallImg from "@/components/contentlist/SmallImg";
import BigImg from "@/components/contentlist/BigImg";
import Music from "@/components/contentlist/Music";
import MyVideo from "@/components/contentlist/MyVideo";
import Talk from "@/components/contentlist/Talk";
// import HomeComment from "@/components/homeComment/HomeComment";
import Api from "@/api";
export default {
    components: {
        PlainText,
        SmallImg,
        BigImg,
        Music,
        MyVideo,
        Talk,
        // HomeComment
    },
    data() {
        return {
            contentList: [],
            pageNum: 1, // 页数，从1开始
            pageSize: 10, // 每页的数据数
            isLastPage: false // 是否是最后一页
        };
    },
    computed: {
        ...mapGetters(["isSold"]),
        ...mapState(["isLoading"])
    },
    watch: {
        isSold() {
            //如果触底了并且不是正在加载中并且不是最后一页
            if (this.isSold && !this.isLoading.contentList && !this.isLastPage ) {
                this.pageNum = this.pageNum + 1; // 页数加一
                const config = {
                    isChangePage: true,
                    showLoading: false
                };
                this.queryContentList(this.$route.query.type, this.$route.query.info, config);
            }
        }
    },
    methods: {
        ...mapMutations(["setIsLoading"]),
        // 请求数据,config为配置对象，{isChangePage，showLoading}
        queryContentList( type, info, config = { isChangePage: false, showLoading: true } ) {
            const newType = type === undefined ? "typeAll" : type;
            const newInfo = info === undefined ? "" : info;
            let tempByLoading = null;
            const newData = {
                type: newType,
                info: newInfo,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            };
            // 判断是否需要显示加载动画
            if (config.showLoading) {
                //设置timeout的原因，是为了处理请求事件太短导致屏幕闪烁不好看
                tempByLoading = setTimeout(() => {
                    this.setIsLoading({ contentList: true }); // 设置加载中为true
                }, 200);
            }
            Api.getContentList(newData).then(res => {
                // 是否是由于切换页面引发的请求，是的话拼接，不是的话替换
                if (config.isChangePage) {
                    this.contentList = this.contentList.concat(res.data.data);
                } else {
                    this.contentList = res.data.data;
                }
                this.handleIsLastPage(res.data.data.length);
                clearTimeout(tempByLoading); // 清除定时器
                this.setIsLoading({ contentList: false });
            });
        },
        // 判断是否是最后一页了
        handleIsLastPage(dataLen) {
            if (dataLen === this.pageSize) {
                this.isLastPage = false;
                return;
            }
            this.isLastPage = true;
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.pageNum = 1; // 路由改变的时候请求的数据要保证在第一页
        this.queryContentList(to.query.type, to.query.info); // 每次路由改变，都重新请求数据
        next();
    },
    mounted() {
        this.queryContentList(this.$route.query.type, this.$route.query.info); // 第一次加载时请求数据
    }
};
</script>

<style lang="scss">
.home-bottom-loading {
    text-align: center;
    color: #fff;
    font-size: 15px;
    > span {
        margin-left: 10px;
    }
}
</style>