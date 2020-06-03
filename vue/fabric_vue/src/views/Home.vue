<template>
    <div class="home">
        <div :class="['along-wrap', shouldShowChangeText && 'along']">
            <FabricCanvas ref="fabricCanvas" :handleBox="handleCanvasBoxRef" />
            <p class="prompt-text">轻点任意元素开始编辑</p>
            <div class="bottom-tools">
                <HandleCanvasBox
                    ref="handleCanvasBox"
                    :canvasBox="fabricCanvasRef"
                    @changeTextTouch="handleChangeTextTouch"
                    @addTextTouch="handleAddTextTouch"
                />
            </div>
        </div>
        <transition name="van-fade">
            <div class="change-text" v-show="shouldShowChangeText">
                <div class="btn-wrap">
                    <div class="complete" @touchstart="completeTouch">
                        <Icon name="success" />
                    </div>
                    <div class="cancel" @touchstart="cancelTouch">
                        <Icon name="cross" />
                    </div>
                </div>
                <textarea rows="10" v-model="textareaValue" ref="textarea"></textarea>
            </div>
        </transition>
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
            handleCanvasBoxRef: null, // 储存handleCanvasBox这个Vue组件实例
            fabricCanvasRef: null, // 储存fabricCanvas这个Vue组件实例
            textareaValue: "", // 输入框文本
            shouldShowChangeText: false // 是否应该显示改变文字的窗口
        };
    },
    watch: {
        shouldShowChangeText() {
            if (this.shouldShowChangeText) {
                // 输入框聚焦，因为设置为显示后需要动画显示元素，这个时候无法聚焦，暂时没有什么好的解决方案，先写个定时器
                setTimeout(() => {
                    this.$refs.textarea.focus();
                }, 500);
            }
        }
    },
    methods: {
        // 点击了改字选项
        handleChangeTextTouch(text = "") {
            this.textareaValue = text;
            this.shouldShowChangeText = true;
        },

        // 点击了添加文字选项
        handleAddTextTouch() {
            if (this.fabricCanvasRef === null) return;
            this.shouldShowChangeText = true;
            this.fabricCanvasRef.addText();
        },

        // 点击修改文字窗口的对勾
        completeTouch() {
            if (this.fabricCanvasRef === null) return;
            const ele = this.fabricCanvasRef.selectedElement;
            const value = this.textareaValue;
            // 清空输入框中的内容并且影藏弹窗
            this.textareaValue = "";
            this.shouldShowChangeText = false;
            // 如果文字被删除完了，就把这个元素给移除掉
            if (value === "") {
                this.fabricCanvasRef.removeElement(ele);
                return;
            }
            // 更新修改后的文字
            this.fabricCanvasRef.updateElement({ text: value });
        },

        // 点击修改文字窗口的叉
        cancelTouch() {
            // 清空输入框中的内容并且影藏弹窗
            this.textareaValue = "";
            this.shouldShowChangeText = false;
        }
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
        padding-top: 20px;
        box-sizing: border-box;
        &.along {
            filter: blur(20px);
            -webkit-filter: blur(20px);
        }
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
        padding: 100px 60px 0;
        .btn-wrap {
            display: flex;
            justify-content: space-between;
            font-size: 40px;
            margin-bottom: 80px;
        }
        textarea {
            display: block;
            width: 100%;
            resize: none;
            border: none;
            text-align: center;
            font-size: 28px;
            line-height: 60px;
            background-color: transparent;
        }
    }
}
</style>