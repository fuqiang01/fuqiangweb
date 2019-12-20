<template>
    <div :class="['context',aboutBgWhite && 'bg-white']" v-html="context"></div>
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
    p {
        margin: 0;
    }
    pre{
        box-shadow: 0 0 5px rgba(255,255,255,.5);
        border-radius: 5px;
        padding: 10px 20px;
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
        }
    }
}
</style>