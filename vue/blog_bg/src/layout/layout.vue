<template>
    <div class="layout">
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
import MyContent from "@/components/layout/MyContent";
import MyHeader from "@/components/layout/MyHeader";
import MySlider from "@/components/layout/MySlider";
export default {
    components: {
        MyContent,
        MyHeader,
        MySlider
    }
};
</script>
<style lang="scss">
.layout {
    height: 100vh;
    .ant-layout {
        height: 100%;
    }
}
</style>
