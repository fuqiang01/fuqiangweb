<template>
    <div class="plain-text">
        <div class="title">
            <router-link :to="{name:'about',params:{id: data.id}}">{{ data.title }}</router-link>
        </div>
        <div class="describe">{{ data.blogDescribe }}</div>
        <DateWrap :data="data"/>
    </div>
</template>

<script>
import DateWrap from './DateWrap'
export default {
    props: ["data"],
    components: {
        DateWrap
    }
};
</script>

<style lang="scss">
.plain-text {
    background: rgba(0,0,0,.3);
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
}
</style>