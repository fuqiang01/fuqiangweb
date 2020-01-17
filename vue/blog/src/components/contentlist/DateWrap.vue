<template>
    <div class="date-wrap">
        <div class="left">
            <a-icon type="clock-circle" />
            <span>{{ myGetTime(data.timeStamp) }}</span>
            <a-icon type="heart" />
            <span>{{ data.likeNumber }}</span>
            <a-icon type="message" />
            <span>{{ data.messageNumber }}</span>
            <a-icon type="heat-map" />
            <span>
                <a
                    v-for="item in data.tags"
                    :key="item"
                >{{ item }}</a>
            </span>
            <a-rate :defaultValue="data.scoresNumber ? (data.scoresSum / data.scoresNumber) : data.scoresSum" allowHalf disabled />
        </div>
        <div class="right">
            <a :href="data.originUrl || 'javaScript:void(0)'">{{ data.originText}}</a>
        </div>
    </div>
</template>

<script>
import myGetTime from '@/util/myGetTime'
export default {
    props: ["data"],
    data(){
        return{
            myGetTime
        }
    }
};
</script>

<style lang="scss">
.date-wrap {
    display: flex;
    justify-content: space-between;
    .left {
        color: #e0e0e0;
        span {
            margin: 0 20px 0 5px;
            color: ccc;
            a {
                padding: 0 8px;
                color: #ccc;
            }
        }
    }
    .right {
        a {
            color: #ccc;
        }
    }
}
</style>