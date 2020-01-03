<template>
    <a-form-item class="type-selection">
        <a-select
            style="width: 300px"
            @change="handleChange"
            v-model="type"
            v-if="showFromItemObj.type"
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
                <a-icon type="edit" class="type-selection-icon" />毒鸡汤
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
        type: {
            get() {
                return this.fromData.type;
            },
            set(value) {
                this.setFromData({ type: value });
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
        handleChange(value) {
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