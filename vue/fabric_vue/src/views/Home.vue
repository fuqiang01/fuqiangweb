<template>
    <div class="home">
        <div class="along-wrap">
            <FabricCanvas ref="fabricCanvas" :handleBox="handleCanvasBoxRef" />
            <p class="prompt-text">轻点任意元素开始编辑</p>
            <div class="bottom-tools">
                <HandleCanvasBox ref="handleCanvasBox" :canvasBox="fabricCanvasRef" />
            </div>
        </div>
        <div class="change-text">
            <div class="btn-wrap">
                <div class="complete">
                    <Icon name="success" />
                </div>
                <div class="cancel">
                    <Icon name="cross" />
                </div>
            </div>
            <textarea rows="10" v-model="textareaValue"></textarea>
        </div>
    </div>
</template>

<script>
import FabricCanvas from "@/components/FabricCanvas";
import HandleCanvasBox from "@/components/HandleCanvasBox";
import { Icon } from "vant";
export default {
    components: {
        FabricCanvas,
        HandleCanvasBox,
        Icon
    },
    data() {
        return {
            handleCanvasBoxRef: undefined, // 储存handleCanvasBox这个Vue组件实例
            fabricCanvasRef: undefined, // 储存fabricCanvas这个Vue组件实例
            textareaValue: "" // 输入框文本
        };
    },
    mounted() {
        this.handleCanvasBoxRef = this.$refs.handleCanvasBox;
        this.fabricCanvasRef = this.$refs.fabricCanvas;
    }
};
</script>

<style lang="less" scoped>
.home {
    .along-wrap {
        background-color: #000;
        height: 100vh;
        overflow: hidden;
        position: relative;
        padding-top: 100px;
        box-sizing: border-box;
        filter: blur(20px);
        -webkit-filter: blur(20px);
        .prompt-text {
            color: #999;
            text-align: center;
        }
        .bottom-tools {
            position: absolute;
            width: 100%;
            bottom: 0;
        }
    }

    .change-text {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 0 60px;
        .btn-wrap {
            display: flex;
            justify-content: space-between;
        }
        textarea{
            display: block;
            width: 100%;
            
        }
    }
}
</style>