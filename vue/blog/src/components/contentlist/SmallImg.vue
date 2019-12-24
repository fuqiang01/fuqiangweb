<template>
    <div class="small-img">
        <div class="title">
            <router-link :to="{name:'about',params:{id: data.id}}">{{ data.title }}</router-link>
        </div>
        <div class="describe">
            <div class="describe-img" @click="imgClick">
                <img :src="data.imgSrc" />
            </div>
            <div class="describe-text">{{ data.describe }}</div>
        </div>
        <DateWrap :data="data" />
        <CoverLayer :isShow="coverShow" @close="onClose">
            <img :src="data.imgSrc">
        </CoverLayer>
    </div>
</template>

<script>
import DateWrap from "./DateWrap";
import CoverLayer from "../common/CoverLayer"
export default {
    props: ["data"],
    components: {
        DateWrap,
        CoverLayer,
    },
    data(){
        return {
            coverShow: false
        }
    },
    methods: {
        onClose(){
            this.coverShow = false;
        },
        imgClick(){
            console.log(1)
            this.coverShow = true;
        }
    }
};
</script>

<style lang="scss">
.small-img {
    background: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 10px 30px;
    border-radius: 5px;
    margin-bottom: 15px;
    .title {
        padding: 10px 0px 20px;
        a {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }
    }
    .describe {
        padding-bottom: 15px;
        display: flex;
        .describe-img{
            img{
                height: 100px;
                border-radius: 5px;
            }
        }
        .describe-text {
            padding-left: 15px;
            line-height: 25px;
            color: #eee;
        }
    }
}
</style>