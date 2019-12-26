<template>
    <div id="app">
        <a-layout>
            <MySlider />
            <a-layout>
                <MyHeader />
                <MyContent />
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import MyContent from '@/components/layout/MyContent'
import MyHeader from '@/components/layout/MyHeader'
import MySlider from '@/components/layout/MySlider'
export default {
    components: {
        MyContent,
        MyHeader,
        MySlider
    }
};
</script>
<style lang="scss">
html,
body {
    width: 100%;
    height: 100%;
    #app {
        width: 100%;
        height: 100%;
        .ant-layout{
            height: 100%;
        }
    }
}
</style>
