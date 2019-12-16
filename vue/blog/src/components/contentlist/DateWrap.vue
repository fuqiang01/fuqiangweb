<template>
    <div class="date-wrap">
        <div class="left">
            <a-icon type="clock-circle" />
            <span>{{ data.date }}</span>
            <a-icon type="heart" />
            <span>{{ data.like }}</span>
            <a-icon type="message" />
            <span>{{ data.messageLen }}</span>
            <a-icon type="heat-map" />
            <span>
                <a
                    :href="item.url || 'javaScript:void(0)'"
                    v-for="item in data.keywords"
                    :key="item.text"
                >{{ item.text }}</a>
            </span>
            <a-rate :defaultValue="data.score" allowHalf disabled />
        </div>
        <div class="right">
            <a :href="data.origin.url || 'javaScript:void(0)'">{{ data.origin.text}}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"]
};
</script>

<style lang="scss" scoped>
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