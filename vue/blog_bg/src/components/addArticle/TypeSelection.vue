<template>
    <a-form-item class="type-selection">
        <a-select
            style="width: 300px;margin-right: 10px"
            v-model="blogType"
            v-if="showFromItemObj.blogType"
        >
            <a-select-option value="knowledge">
                <a-icon type="thunderbolt" class="type-selection-icon" />知识点
            </a-select-option>
            <a-select-option value="article">
                <a-icon type="book" class="type-selection-icon" />文章
            </a-select-option>
            <a-select-option value="music">
                <a-icon type="customer-service" class="type-selection-icon" />音乐
            </a-select-option>
            <a-select-option value="video">
                <a-icon type="youtube" class="type-selection-icon" />视屏
            </a-select-option>
            <a-select-option value="talk">
                <a-icon type="edit" class="type-selection-icon" />毒鸡汤
            </a-select-option>
        </a-select>
        <a-select
            style="width: 300px"
            @change="styleTypeChange"
            v-model="styleType"
            v-if="showFromItemObj.styleType"
        >
            <a-select-option value="plainText">
                <a-icon type="form" class="type-selection-icon" />纯文本
            </a-select-option>
            <a-select-option value="smallImg">
                <a-icon type="idcard" class="type-selection-icon" />小图
            </a-select-option>
            <a-select-option value="bigImg">
                <a-icon type="contacts" class="type-selection-icon" />大图
            </a-select-option>
            <a-select-option value="music">
                <a-icon type="customer-service" class="type-selection-icon" />音乐
            </a-select-option>
            <a-select-option value="video">
                <a-icon type="youtube" class="type-selection-icon" />视屏
            </a-select-option>
            <a-select-option value="talk">
                <a-icon type="edit" class="type-selection-icon" />说说
            </a-select-option>
        </a-select>
        <span class="type-selection-weight" v-if="showFromItemObj.weight">
            <a-icon type="rise" style="color: rgba(0,0,0,.25)" />
            <span class="weigh-text">权重：</span>
            <a-input-number :min="0" :max="10" v-model="weight" />
        </span>
        <a-button :type="isReprint ? 'primary' : 'dashed'" @click="changeReprint">转载滴</a-button>
        <UploadFile />
        <ArticleOrigin />
    </a-form-item>
</template>

<script>
import UploadFile from "./UploadFile";
import ArticleOrigin from "./ArticleOrigin";
import { mapState, mapMutations } from "vuex";
export default {
    components: {
        UploadFile,
        ArticleOrigin
    },
    data() {
        return {
            isReprint: false
        };
    },
    computed: {
        ...mapState(["fromData", "showFromItemObj"]),
        blogType: {
            get() {
                return this.fromData.blogType;
            },
            set(value) {
                this.setFromData({ blogType: value });
            }
        },
        styleType: {
            get() {
                return this.fromData.styleType;
            },
            set(value) {
                this.setFromData({ styleType: value });
            }
        },
        weight: {
            get() {
                return this.fromData.weight;
            },
            set(value) {
                this.setFromData({ weight: value });
            }
        }
    },
    methods: {
        ...mapMutations(["setFromData", "setShowFromItemObj"]),
        styleTypeChange(value) {
            this.$router.push(`/add/${value}`);
        },
        changeReprint() {
            this.isReprint = !this.isReprint;
            this.setShowFromItemObj({origin: this.isReprint, originUrl: this.isReprint})
        }
    },
    beforeMount() {
        this.setFromData({ type: this.$route.params.type });
    }
};
</script>

<style lang="scss">
.type-selection-icon {
    color: rgba(0, 0, 0, 0.25);
    margin-right: 10px;
}
.type-selection-weight {
    display: inline-block;
    border-radius: 4px;
    line-height: 30px;
    border: 1px solid #d9d9d9;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    .weigh-text {
        color: rgba(0, 0, 0, 0.25);
        padding-left: 5px;
    }
    .ant-input-number {
        border: none;
        background-color: transparent;
        height: 30px;
    }
}
</style>