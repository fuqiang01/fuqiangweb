<template>
    <div class="about">
        <div class="left">
            <div class="text-wrap">
                <Context :context="infoData.mainText"/>
            </div>
            <div class="comments-wrap">
                <Comments/>
            </div>
        </div>
        <div class="right">
            <a-affix :offsetTop="affixTop" :target="() => this.appDom">
                <Related :infoData="infoData"/>
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
export default {
    components: {
        Context,
        Related,
        Comments
    },
    data() {
        return {
            affixTop: 10,
            infoData: {
                id: 2,
                type: "smallImg",
                title: "标题文本",
                imgSrc:
                    "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg",
                describe:
                    "我们在小程序的项目开发过程中，也不可避免的需要使用到字体图标，毕竟小程序那2M代码包大小的限制，还是挺让人隐隐作痛的。相对于传统web项目中使用iconfont字体图标，微信小程序中使用iconfont字体图标还是有一定的区别。就让我们开始如何在微信小程序中使用iconfont字体图标吧。",
                mainText:
                    '<h1>测试标题</h1><ol><li>选项一</li><li>选项二</li><li><span style="background-color: rgb(230, 0, 0); color: rgb(255, 255, 255);">选项三</span></li></ol><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> <span class="hljs-keyword">test</span> = <span class="hljs-string">"测试代码";</span></pre>',
                date: "2019-12-13",
                like: 999,
                messageLen: 10,
                score: 5,
                keywords: [
                    { text: "关键词一", url: "#" },
                    { text: "关键词二", url: "#" }
                ],
                origin: {
                    text: "某一篇文章",
                    url: "https://www.baidu.com"
                }
            }
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
