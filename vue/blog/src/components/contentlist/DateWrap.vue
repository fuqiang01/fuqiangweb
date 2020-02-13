<template>
    <div class="date-wrap">
        <div class="left">
            <span class="left-item">
                <a-icon type="clock-circle" />
                {{ myGetTime(data.timeStamp) }}
            </span>
            <span class="left-item">
                <a-icon type="heart" />
                {{ data.likeNumber }}
            </span>
            <span class="left-item">
                <a-icon type="message" />
                {{ data.messageNumber }}
            </span>
            <span class="left-item">
                <a-icon type="heat-map" />
                <a v-for="item in data.tags" :key="item">{{ item }}</a>
            </span>
            <a-rate
                :defaultValue="data.scoresNumber ? (data.scoresSum / data.scoresNumber) : data.scoresSum"
                allowHalf
                disabled
            />
        </div>
        <!-- <div class="right">
            <a :href="data.originUrl || 'javaScript:void(0)'">{{ data.originText}}</a>
        </div> -->
    </div>
</template>

<script>
import myGetTime from "@/util/myGetTime";
export default {
    props: ["data"],
    data() {
        return {
            myGetTime
        };
    }
};
</script>

<style lang="scss">
.date-wrap {
    display: flex;
    justify-content: space-between;
    .left {
        color: #e0e0e0;
        .left-item {
            margin-right: 15px;
            color: #ccc;
            .anticon {
                margin-right: 8px;
            }
            a {
                padding: 0 5px;
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