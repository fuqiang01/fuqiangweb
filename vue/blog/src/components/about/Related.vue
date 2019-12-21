<template>
    <div :class="['related',aboutBgWhite && 'bg-white']">
        <p>
            <span>作者：</span>
            <a :href="infoData.origin.url || 'javaScript:void(0)'">{{ infoData.origin.text }}</a>
        </p>
        <p>
            <span>发布时间：</span>
            <span>{{ infoData.date }}</span>
        </p>
        <p class="keywords-wrap">
            <span>相关标签：</span>
            <a
                v-for="item in infoData.keywords"
                :key="item.text"
                :href="item.url || 'javaScript:void(0)'"
            >{{ item.text }}</a>
        </p>
        <div>
            <span class="btn-wrap">
                <a-button type="primary" @click="onBtnClick">
                    <a-icon v-if="!isLike" type="like" />
                    <a-icon v-else type="like" theme="filled" />
                </a-button>
            </span>
            <a-rate v-model="rateValue" allowHalf />
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: ["infoData"],
    data() {
        return {
            isLike: false,
            rateValue: 5
        };
    },
    computed: {
        ...mapState(['aboutBgWhite'])
    },
    methods: {
        onBtnClick() {
            this.isLike = !this.isLike;
            console.log(this.$refs);
        }
    }
};
</script>

<style lang="scss">
.related {
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    color: #eee;
    a {
        color: #eee;
    }
    .btn-wrap {
        margin-right: 10px;
    }
    .keywords-wrap {
        a {
            padding: 0 5px;
        }
    }
    &.bg-white {
        background: #fff;
        color: #4d4d4d;
        a {
            color: #4d4d4d;
        }
    }
}
</style>