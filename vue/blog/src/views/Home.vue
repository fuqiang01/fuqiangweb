<template>
    <div class="home">
        <div class="spin-wrap" v-if="spinning">
            <a-spin tip="Loading..." size="large" :spinning="spinning" :delay="300"/>
        </div>
        <div v-for="item in contentList" :key="item.id">
            <PlainText v-if="item.type === 'plainText'" :data="item" />
            <SmallImg v-else-if="item.type === 'smallImg'" :data="item" />
            <BigImg v-else-if="item.type === 'bigImg'" :data="item" />
            <Music v-else-if="item.type === 'music'" :data="item" />
            <MyVideo v-else-if="item.type === 'myVideo'" :data="item" />
            <Talk v-else-if="item.type === 'talk'" :data="item" />
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import PlainText from "@/components/contentlist/PlainText";
import SmallImg from "@/components/contentlist/SmallImg";
import BigImg from "@/components/contentlist/BigImg";
import Music from "@/components/contentlist/Music";
import MyVideo from "@/components/contentlist/MyVideo";
import Talk from "@/components/contentlist/Talk";
import Api from "@/api";
export default {
    components: {
        PlainText,
        SmallImg,
        BigImg,
        Music,
        MyVideo,
        Talk
    },
    data() {
        return {
            contentList: [],
            spinning: true
        };
    },
    methods: {
        ...mapActions(["queryContentList"])
    },
    mounted() {
        Api.getContentList().then(res => {
            this.contentList = res.data;
            this.spinning = false;
        });
    }
};
</script>

<style lang="scss">
.home {
    .spin-wrap {
        text-align: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>