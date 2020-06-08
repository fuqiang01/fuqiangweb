<template>
    <div class="handle-canvas-box">
        <!-- 默认操作面板 -->
        <transition name="van-slide-up">
            <ul class="tool-wrap" v-show="shouldShow.shouldShowToolWrap">
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
                <li @touchstart="showAddBox">
                    <div class="icon">
                        <Icon name="plus" />
                    </div>
                    <p>添加</p>
                </li>
            </ul>
        </transition>
        <!-- 添加操作面板 -->
        <transition name="van-slide-up">
            <div class="add-box" v-show="shouldShow.shouldShowAddBox">
                <div class="btn-wrap">
                    <input
                        type="file"
                        style="display: none"
                        ref="addImgFileInput"
                        @change="addImgInputChange"
                    />
                    <Button icon="edit" color="#191c24" @touchstart="addTextTouch">加字</Button>
                    <Button icon="photo" color="#191c24" @touchstart="addImgTouch">加图</Button>
                    <Button icon="newspaper-o" color="#191c24">素材</Button>
                </div>
                <p class="cancel" @touchstart="showToolWrap">取消</p>
            </div>
        </transition>
        <!-- 图片操作面板 -->
        <transition name="van-slide-up">
            <div class="handle-img-box" v-show="shouldShow.shouldShowHandleImgBox">
                <input
                    type="file"
                    style="display: none"
                    ref="changeImgFileInput"
                    @change="changeImgInputChange"
                />
                <p @touchstart="changeImgTouch">换图</p>
                <p>放大</p>
                <p>缩小</p>
            </div>
        </transition>
        <!-- 文字操作面板 -->
        <transition name="van-slide-up">
            <div class="handle-text-box" v-show="shouldShow.shouldShowHandleTextBox">
                <div class="top">
                    <div class="font">
                        <span>{{ fontFamily }}</span>
                        <Icon name="arrow-down" />
                    </div>
                    <div class="color-size">
                        <div class="color" :style="{backgroundColor: element.fill || '#fff'}"></div>
                        <div class="size">{{ element.fontSize || 0 }}</div>
                    </div>
                </div>
                <div class="type-list">
                    <p @touchstart="touchChangeText">改字</p>
                    <p @touchstart="ShowAlignBox">对齐</p>
                    <p @touchstart="ShowStylesBox">样式</p>
                    <p>间距</p>
                </div>
            </div>
        </transition>
        <!-- 文字对齐方式操作面板 -->
        <transition name="van-slide-up">
            <div class="align-box" v-show="shouldShow.shouldShowAlignBox">
                <div class="type-list">
                    <p>左对齐</p>
                    <p class="active">居中对齐</p>
                    <p>右对齐</p>
                </div>
                <div class="bottom-bar">
                    <div class="complete">
                        <Icon name="success" />
                    </div>
                    <p>对齐</p>
                    <div class="cancel">
                        <Icon name="cross" />
                    </div>
                </div>
            </div>
        </transition>
        <!-- 斜体、下划线、加粗操作 -->
        <transition name="van-slide-up">
            <div class="styles-box" v-show="shouldShow.shouldShowStylesBox">
                <div class="type-list">
                    <p>斜体</p>
                    <p class="active">上划线</p>
                    <p>中划线</p>
                    <p>下划线</p>
                </div>
                <div class="bottom-bar">
                    <div class="complete">
                        <Icon name="success" />
                    </div>
                    <p>对齐</p>
                    <div class="cancel">
                        <Icon name="cross" />
                    </div>
                </div>
            </div>
        </transition>
        <!-- <transition name="van-slide-up"></transition> -->
        <!-- <transition name="van-slide-up"></transition> -->
        <!-- <transition name="van-slide-up"></transition> -->
    </div>
</template>

<script>
import { Icon, Button } from "vant";
export default {
    // 传入fabricCanvas组件的实例对象
    props: ["canvasBox"],
    components: {
        Icon,
        Button
    },
    data() {
        return {
            // 控制所有操作面板的显示与否
            shouldShow: {
                shouldShowToolWrap: true,
                shouldShowAddBox: false,
                shouldShowHandleImgBox: false,
                shouldShowHandleTextBox: false,
                shouldShowAlignBox: false,
                shouldShowStylesBox: false,
            }
        };
    },
    computed: {
        // 当前选中的canvas元素
        element() {
            // 如果还没有被选中的元素对象，那就返回一个空对象
            if (
                this.canvasBox == null ||
                this.canvasBox.selectedElement == null
            )
                return {};
            return this.canvasBox.selectedElement;
        },
        // 当前选中文字元素的字体及粗细
        fontFamily() {
            if (
                this.element.fontWeight === undefined ||
                this.element.fontFamily === undefined
            )
                return "未选中任何文本";
            const fotWeight = this.element.fontWeight;
            const fontFamily = this.element.fontFamily;
            let weightText = "粗体";
            if (fotWeight < 600 || fotWeight === "normal") {
                weightText = "细体";
            }
            return `${fontFamily}-${weightText}`;
        }
    },
    methods: {
        // 隐藏所有面板
        hideAllBox() {
            for (const prop in this.shouldShow) {
                this.shouldShow[prop] = false;
            }
        },
        // 显示添加面板
        showAddBox() {
            this.hideAllBox();
            this.shouldShow.shouldShowAddBox = true;
        },

        // 显示初始面板
        showToolWrap() {
            this.hideAllBox();
            this.shouldShow.shouldShowToolWrap = true;
        },

        // 显示编辑文字操作面板
        showHandleTextBox() {
            this.hideAllBox();
            this.shouldShow.shouldShowHandleTextBox = true;
        },

        // 显示编辑图片操作面板
        showHandleImgBox() {
            this.hideAllBox();
            this.shouldShow.shouldShowHandleImgBox = true;
        },

        // 显示文字对齐方式操作面板
        ShowAlignBox(){
            this.hideAllBox();
            this.shouldShow.shouldShowAlignBox = true;
        },

        // 显示斜体、下划线、加粗操作面板
        ShowStylesBox(){
            this.hideAllBox();
            this.shouldShow.shouldShowStylesBox = true;
        },

        // 点击改字
        touchChangeText() {
            this.$emit("changeTextTouch", this.element.text);
        },

        // 点击添加文字
        addTextTouch() {
            this.$emit("addTextTouch");
        },

        // 点击换图
        changeImgTouch() {
            this.$refs.changeImgFileInput.click();
        },

        // 点击加图
        addImgTouch() {
            this.$refs.addImgFileInput.click();
        },

        // 换图选择上传文件的change事件
        changeImgInputChange(e) {
            // 获取上传的文件
            const file = this.$refs.changeImgFileInput.files[0];
            // 获取上传文件在本机的绝对地址
            const url = window.URL.createObjectURL(file);
            // 更新图片
            this.canvasBox.updateImgUrl(url);
        },

        // 加图选择上传文件的change事件
        addImgInputChange() {
            // 获取上传的文件
            const file = this.$refs.addImgFileInput.files[0];
            // 获取上传文件在本机的绝对地址
            const url = window.URL.createObjectURL(file);
            // 更新图片
            this.canvasBox.addImg(url);
        }
    }
};
</script>

<style lang="less" scoped>
@bgColor: #191c24;
.handle-canvas-box {
    color: #fff;
    position: relative;
    .type-list {
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
    .bottom-bar{
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        font-size: 40px;
        >p{
            font-size: 28px;
        }
    }
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
                    border: 1px solid #aaa;
                }
                .size {
                    background-color: @bgColor;
                    line-height: 80px;
                    text-align: center;
                    margin-left: 20px;
                    box-sizing: border-box;
                    font-size: 28px;
                }
            }
        }
    }
    .align-box, .styles-box{
        margin: 0 30px;
        .type-list{
            p{
                color: #aaa;
                &.active{
                    color: #fff;
                }
            }
        }
    }
}
</style>