<template>
    <div class="talk">
        <p class="con-text">{{ data.title }}</p>
        <p class="con-origin">
            <a :href="data.origin.url || 'javaScript:void(0)' ">--- {{ data.origin.text }}</a>
        </p>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">
.talk{
    background: rgba(0,0,0,.3);
    box-sizing: border-box;
    padding: 20px 30px;
    border-radius: 5px;
    margin-bottom: 15px;
    color: #fff;
    p{
        margin: 0;
        &.con-text{
            line-height: 25px;
            margin-bottom: 10px;
            font-size: 15px;
        }
        &.con-origin{
            text-align: right;
            a{
                color: #fff;
            }
        }
    }
}
</style>