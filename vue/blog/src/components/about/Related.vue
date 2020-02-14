<template>
    <div :class="['related',aboutBgWhite && 'bg-white']">
        <p>
            <span>作者：</span>
            <a :href="blogData.originUrl || 'javaScript:void(0)'">{{ blogData.originText }}</a>
        </p>
        <p>
            <span>发布时间：</span>
            <span>{{myGetTime(blogData.timeStamp)}}</span>
        </p>
        <p class="keywords-wrap">
            <span>相关标签：</span>
            <a
                v-for="item in blogData.tags"
                :key="item"
                href='javaScript:void(0)'
            >{{ item }}</a>
        </p>
        <div>
            <span class="btn-wrap">
                <a-button type="primary" @click="onBtnClick">
                    <a-icon v-if="!isLike" type="like" />
                    <a-icon v-else type="like" theme="filled" />
                </a-button>
            </span>
            <a-rate 
                allowHalf 
                v-model="rateValue" 
                @change="rateChange"/>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import myGetTime from '@/util/myGetTime'
import Api from '@/api'
export default {
    props: ["blogData"],
    data() {
        return {
            isLike: false,
            rateValue: 5,
            myGetTime
        };
    },
    computed: {
        ...mapState(['aboutBgWhite'])
    },
    methods: {
        onBtnClick() {
            this.isLike = !this.isLike;
            if(this.isLike){
                Api.giveLikeByBlog(this.blogData.id)
            }
            else{
                Api.cancelLikeByBlog(this.blogData.id)
            }
        },
        rateChange(val){
            const id = this.$route.params.id;
            let data = {
                blogId: id,
                currentScores: val,
                prevScores: 0
            };
            if(sessionStorage[id]){
                data.prevScores = sessionStorage[id]
            }
            sessionStorage[id] = val;
            Api.addScore(data)
        }
    },
    mounted(){
        this.rateValue = this.blogData.scoresNumber ? (this.blogData.scoresSum / this.blogData.scoresNumber) : this.blogData.scoresSum
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
        display: flex;
        flex-wrap: wrap;
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