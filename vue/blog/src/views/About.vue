<template>
    <div class="about">
        <div class="left">
            <div class="text-wrap">
                <a-skeleton
                    active
                    :loading="isLoading.context"
                    :paragraph="{rows: 10}"
                    :title="false"
                >
                    <Context :context="blogData.content" />
                </a-skeleton>
            </div>
            <!-- <div class="comments-wrap">
                <Comments />
            </div> -->
        </div>
        <div class="right">
            <a-affix :offsetTop="affixTop" :target="() => this.appDom">
                <Related :blogData="blogData" v-if="blogData.id" />
                <div class="tab-btn-wrap">
                    <a-button ghost @click="onTabBg">点击切换背景颜色</a-button>
                </div>
            </a-affix>
        </div>
    </div>
</template>

<script>
import Context from "@/components/about/Context";
import Related from "@/components/about/Related";
// import Comments from "@/components/about/Comments";
import { mapState, mapMutations } from "vuex";
import Api from "@/api";
export default {
    components: {
        Context,
        Related,
        // Comments
    },
    data() {
        return {
            affixTop: 10,
            blogData: {}
        };
    },
    computed: {
        ...mapState(["appDom", "aboutBgWhite", "isLoading"])
    },
    methods: {
        ...mapMutations(["setAboutBgWhite", "setIsLoading"]),
        onTabBg() {
            this.setAboutBgWhite(!this.aboutBgWhite);
        },
        queryBlog(id) {
            this.setIsLoading({ context: true });
            Api.getBlogById(id).then(res => {
                this.blogData = res.data;
                this.setIsLoading({ context: false });
            });
        }
    },
    mounted() {
        const id = this.$route.params.id;
        this.queryBlog(id);
        Api.addBrowseNum(id);
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
        .text-wrap {
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
