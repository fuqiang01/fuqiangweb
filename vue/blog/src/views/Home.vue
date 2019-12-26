<template>
    <div class="home">
        <div v-for="item in contentList" :key="item.id">
            <PlainText v-if="item.type === 'plainText'" :data="item" />
            <SmallImg v-else-if="item.type === 'smallImg'" :data="item" />
            <BigImg v-else-if="item.type === 'bigImg'" :data="item" />
            <Music v-else-if="item.type === 'music'" :data="item" />
            <MyVideo v-else-if="item.type === 'video'" :data="item" />
            <Talk v-else-if="item.type === 'talk'" :data="item" />
        </div>
        <div class="home-bottom-loading" v-if="isSold">
            <a-icon type="loading" />
            <span>加载中...</span>
        </div>
        <HomeComment />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PlainText from "@/components/contentlist/PlainText";
import SmallImg from "@/components/contentlist/SmallImg";
import BigImg from "@/components/contentlist/BigImg";
import Music from "@/components/contentlist/Music";
import MyVideo from "@/components/contentlist/MyVideo";
import Talk from "@/components/contentlist/Talk";
import HomeComment from "@/components/homeComment/HomeComment";
import Api from "@/api";
export default {
    components: {
        PlainText,
        SmallImg,
        BigImg,
        Music,
        MyVideo,
        Talk,
        HomeComment
    },
    data() {
        return {
            contentList: [],
        };
    },
    computed: {
        ...mapGetters(['isSold'])
    },
    watch: {
        isSold(){
            console.log(this.isSold,'发送再次加载请求')
        }
    },
    methods: {
        queryContentList(data) {
            console.log(data)
            Api.getContentList().then(res => {
                this.contentList = res.data;
            });
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.queryContentList(to.params.search);
        next();
    },
    mounted() {
        this.queryContentList();
    }
};
</script>

<style lang="scss">
.home-bottom-loading{
    text-align: center;
    color: #fff;
    font-size: 15px;
    >span{
        margin-left: 10px;
    }
}
</style>