<template>
    <div class="about">
        <div class="left">
            <div class="text-wrap">
                <Context :context="infoData.mainText"/>
            </div>
            <div class="comments-wrap">
                <Comments :id="id"/>
            </div>
        </div>
        <div class="right">
            <a-affix :offsetTop="affixTop" :target="() => this.appDom">
                <Related :infoData="infoData" v-if="infoData.id"/>
                <div class="tab-btn-wrap">
                    <a-button ghost @click="onTabBg">点击切换背景颜色</a-button>
                </div>
            </a-affix>
        </div>
    </div>
</template>

<script>
import "highlight.js/styles/monokai-sublime.css"; //导入代码高亮样式
import Context from "@/components/about/Context";
import Related from "@/components/about/Related";
import Comments from "@/components/about/Comments";
import { mapState, mapMutations } from "vuex";
import Api from '@/api';
export default {
    components: {
        Context,
        Related,
        Comments
    },
    data() {
        return {
            affixTop: 10,
            infoData: {},
            id: null
        };
    },
    computed: {
        ...mapState(["appDom","aboutBgWhite"])
    },
    methods: {
        ...mapMutations(['setAboutBgWhite']),
        onTabBg() {
            this.setAboutBgWhite( !this.aboutBgWhite ) 
        }
    },
    mounted(){
        const id = this.$route.params.id;
        this.id = id;
        Api.getInfoById()
            .then( res=> {
                this.infoData = res.data;
            })
    }
};
</script>

<style lang="scss">
.about {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    .left {
        width: 915px;
        .text-wrap{
            margin-bottom: 15px;
        }
    }
    .right {
        width: 270px;
        .tab-btn-wrap {
            padding-top: 15px;
        }
    }
}
</style>
