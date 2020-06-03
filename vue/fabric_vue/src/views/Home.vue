<template>
    <div class="home">
        <FabricCanvas ref="fabricCanvas" :handleBox='handleCanvasBoxRef' />
        <p class="prompt-text">轻点任意元素开始编辑</p>
        <div class="bottom-tools">
            <HandleCanvasBox ref="handleCanvasBox" :canvasBox='fabricCanvasRef' />
        </div>
    </div>
</template>

<script>
import FabricCanvas from '@/components/FabricCanvas';
import HandleCanvasBox from '@/components/HandleCanvasBox';
export default {
    components: {
        FabricCanvas,
        HandleCanvasBox
    },
    data(){
        return{
            handleCanvasBoxRef: undefined,            // 储存handleCanvasBox这个Vue组件实例
            fabricCanvasRef: undefined,               // 储存fabricCanvas这个Vue组件实例
        }
    },
    mounted(){
        this.handleCanvasBoxRef = this.$refs.handleCanvasBox;
        this.fabricCanvasRef = this.$refs.fabricCanvas;
    },
}
</script>

<style lang="less" scoped>
.home{
    background-color: #000;
    height: 100vh;
    overflow: hidden;
    position: relative;
    padding-top: 100px;
    box-sizing: border-box;
    .prompt-text{
        color: #999;
        text-align: center;
    }
    .bottom-tools{
        position: absolute;
        width: 100%;
        bottom: 0;
    }
}
</style>