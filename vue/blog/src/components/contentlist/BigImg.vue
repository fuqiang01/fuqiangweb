<template>
    <div class="big-img">
        <div class="title">
            <router-link :to="{name:'about',params:{id: data.id}}">{{ data.title }}</router-link>
        </div>
        <div class="describe">{{ data.describe }}</div>
        <div class="img">
            <img :src="data.imgSrc" />
        </div>
        <DateWrap :data="data" />
        <CoverLayer :isShow="coverShow" @close="onClose">
            <img :src="data.imgSrc" />
        </CoverLayer>
    </div>
</template>

<script>
import DateWrap from "./DateWrap";
import CoverLayer from "../common/CoverLayer";
export default {
    props: ["data"],
    components: {
        DateWrap,
        CoverLayer
    },
    data() {
        return {
            coverShow: false
        };
    },
    methods: {
        onClose() {
            this.coverShow = false;
        },
        imgClick() {
            console.log(1);
            this.coverShow = true;
        }
    }
};
</script>

<style lang="scss">
.big-img {
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
        line-height: 25px;
        color: #eee;
        padding-bottom: 15px;
    }
    .img{
        padding-bottom: 15px;
        img{
            width: 100%;
        }
    }
}
</style>