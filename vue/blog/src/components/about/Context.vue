<template>
    <div :class="['ql-editor context',aboutBgWhite && 'bg-white']" v-html="context"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: ['context'],
    computed: {
        ...mapState(['aboutBgWhite'])
    }
}
</script>

<style lang="scss">
.context {
    padding: 30px;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    a {
        color: #fff;
    }
    h1,h2,h3,h4,h5,h6 {
        color: #fff;
    }
    p,h1,h2,h3,h4,h5,h6 {
        margin-bottom: 8px;
    }
    p {
        margin: 0;
        line-height: 25px;
    }
    pre{
        box-shadow: 0 0 5px rgba(255,255,255,.5);
        border-radius: 5px;
        padding: 10px 20px;
        overflow-x: auto;
        &::-webkit-scrollbar {
            height: 5px;
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(0,0,0,.2);
            border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,.1);
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,.3);
        }
        .hljs-comment, .hljs-deletion, .hljs-meta{
            color: #999;
        }
    }
    li{
        padding-left: 0;
        list-style-type: disc;
    }
    &.bg-white{
        background-color: #fff;
        color: #4f4f4f;
        a {
            color: #4f4f4f;
        }
        h1,h2,h3,h4,h5,h6 {
            color: #4f4f4f;
        }
        pre{
            box-shadow: none;
            border-radius: 5px;
            padding: 10px 20px;
            background: #2d2d2d;
            color: #fff;
        }
    }
}
</style>