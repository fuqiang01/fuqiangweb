<template>
    <div class="handle-canvas-box">
        <transition name="van-slide-up">
            <ul class="tool-wrap" v-show="shouldShowToolWrap">
                <li>
                    <div class="icon">
                        <Icon name="edit" />
                    </div>
                    <p>修改文案</p>
                </li>
                <li>
                    <div class="icon">
                        <Icon name="photo" />
                    </div>
                    <p>换张图片</p>
                </li>
                <li @touchstart="touchAddBtn">
                    <div class="icon">
                        <Icon name="plus" />
                    </div>
                    <p>添加</p>
                </li>
            </ul>
        </transition>
        <transition name="van-slide-up">
            <div class="add-box" v-show="shouldShowAddBox">
                <div class="btn-wrap">
                    <Button icon="edit" color="#191c24">加字</Button>
                    <Button icon="photo" color="#191c24">加图</Button>
                    <Button icon="newspaper-o" color="#191c24">素材</Button>
                </div>
                <p class="cancel" @touchstart="touchCancelBtn">取消</p>
            </div>
        </transition>
        <transition name="van-slide-up">
            <div class="handle-img-box" v-show="shouldShowHandleImgBox">
                <p>换图</p>
                <p>放大</p>
                <p>缩小</p>
            </div>
        </transition>
        <transition name="van-slide-up">
            <div class="handle-text-box" v-show="shouldShowHandleTextBox">
                <div class="top">
                    <div class="font">
                        <span>{{ fontFamily }}</span>
                        <Icon name="arrow-down" />
                    </div>
                    <div class="color-size">
                        <div class="color" :style="{backgroundColor: element.color || '#fff'}"></div>
                        <div class="size">{{ element.fontSize || 0 }}</div>
                    </div>
                </div>
                <div class="type">
                    <p>改字</p>
                    <p>对齐</p>
                    <p>样式</p>
                    <p>间距</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { Icon, Button } from "vant";
export default {
    // 传入fabricCanvas组件的实例对象
    props: ['canvasBox'],
    components: {
        Icon,
        Button
    },
    data() {
        return {
            shouldShowToolWrap: true,
            shouldShowAddBox: false,
            shouldShowHandleImgBox: false,
            shouldShowHandleTextBox: false,
        };
    },
    computed: {
        // 当前选中的canvas元素
        element(){
            // 如果还没有被选中的元素对象，那就返回一个空对象
            if(this.canvasBox === undefined || this.canvasBox.selectedElement === undefined) return{};
            return this.canvasBox.selectedElement;
        },
        // 当前选中文字元素的字体及粗细
        fontFamily(){
            if(this.element === undefined) return '';
            const fotWeight = this.element.fontWeight;
            const fontFamily = this.element.fontFamily;
            let weightText = '粗体';
            if(fotWeight < 600 || fotWeight === 'normal'){
                weightText = '细体';
            }
            return `${fontFamily}-${weightText}`;
        }
    },
    methods: {
        // 点击了添加按钮
        touchAddBtn() {
            this.shouldShowToolWrap = false;
            this.shouldShowAddBox = true;
        },

        // 点击了添加中的取消按钮
        touchCancelBtn(){
            this.shouldShowAddBox = false;
            this.shouldShowToolWrap = true;
        },

        // 显示编辑文字操作面板
        showHandleTextBox(){
            this.shouldShowToolWrap = false;
            this.shouldShowAddBox = false;
            this.shouldShowHandleImgBox = false;
            this.shouldShowHandleTextBox = true;
            console.log(this.element.get('color'))
        },

        // 显示编辑图片操作面板
        showHandleImgBox(){
            this.shouldShowToolWrap = false;
            this.shouldShowAddBox = false;
            this.shouldShowHandleImgBox = true;
            this.shouldShowHandleTextBox = false;
        },
    },

};
</script>

<style lang="less" scoped>
@bgColor: #191c24;
.handle-canvas-box {
    color: #fff;
    position: relative;
    .tool-wrap {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 80px;
        width: 100%;
        li {
            .icon {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: @bgColor;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 40px;
            }
            > p {
                text-align: center;
                padding-top: 10px;
            }
        }
    }
    .add-box {
        position: absolute;
        bottom: 60px;
        width: 100%;
        .btn-wrap {
            display: flex;
            justify-content: space-around;
            font-size: 50px;
            button {
                font-size: 30px;
                padding: 0 40px;
                height: 80px;
                span {
                    padding-left: 20px;
                }
            }
        }
        .cancel {
            text-align: center;
            margin-top: 20px;
            line-height: 80px;
        }
    }
    .handle-img-box {
        display: flex;
        font-size: 28px;
        background-color: @bgColor;
        margin: 0 30px;
        border-radius: 10px;
        position: absolute;
        bottom: 60px;
        width: calc(100% - 60px);
        box-sizing: border-box;
        > p {
            width: 100%;
            text-align: center;
            line-height: 90px;
        }
    }
    .handle-text-box {
        margin: 0 30px;
        position: absolute;
        bottom: 60px;
        width: calc(100% - 60px);
        .top {
            display: flex;
            justify-content: space-between;
            height: 80px;
            align-items: center;
            margin-bottom: 20px;
            .font {
                span {
                    font-family: "宋体";
                    font-size: 40px;
                    padding-right: 10px;
                }
            }
            .color-size {
                display: flex;
                .color,
                .size {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                }
                .size {
                    background-color: @bgColor;
                    line-height: 80px;
                    text-align: center;
                    margin-left: 20px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    font-size: 28px;
                }
            }
        }
        .type {
            display: flex;
            justify-content: space-between;
            background-color: @bgColor;
            border-radius: 10px;
            > p {
                width: 100%;
                text-align: center;
                line-height: 90px;
                font-size: 28px;
            }
        }
    }
}
</style>