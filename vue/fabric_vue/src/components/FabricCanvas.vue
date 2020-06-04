<template>
    <div class="fabric-canvas" @touchstart='fabricCanvasTouch' ref="fabricCanvasTouch">
        <div class="canvas-wrap">
            <canvas :id="canvasId" :width="canvasWidth" :height="canvasHeight"></canvas>
        </div>
    </div>
</template>

<script>
import { fabric } from "fabric";
import logo from "@/assets/logo.png";
import bg from "@/assets/bg.jpg";
export default {
    // 传入handleCanvasBox这个Vue组件实例
    props: ["handleBox"],
    data() {
        return {
            canvasWidth: 0,               // 画布宽度
            canvasHeight: 0,              // 画布高度
            canvasId: "fabric-canvas",    // 画布id
            selectedElement: null,        // 当前选中的画布中的元素
        };
    },
    computed: {
        canvas() {
            return new fabric.Canvas(this.canvasId);
        }
    },
    methods: {
        // 绘制图片函数promise化
        drawImgFromUrlToPromise(imgUrl) {
            return new Promise((resolve, reject) => {
                fabric.Image.fromURL(imgUrl, function(oImg) {
                    resolve(oImg);
                });
            });
        },

        // 修改图片
        updateImgUrl(url) {
            return new Promise((resolve, reject) => {
                if (this.selectedElement === null) {
                    reject("当前没有选中任何元素");
                }
                if (this.selectedElement.get("type") !== "image") {
                    reject("非图片元素，不可进行修改图片操作！");
                }
                this.selectedElement.setSrc(url, img => {
                    this.canvas.renderAll();
                    resolve(img);
                });
            });
        },

        // 修改当前选中元素的属性
        updateElement(attrObj) {
            if(this.selectedElement === null) return;
            this.selectedElement.set(attrObj);
            this.canvas.renderAll();
        },

        // 给当前画布绑定事件
        bindEvent() {
            const _this = this;
            this.canvas.on("mouse:down", function(options) {
                // 如果这次点击事件没有选中任何元素，就将选中元素设置为undefined并退出
                if(options.target === null){
                    _this.selectedElement = undefined;
                    _this.handleBox.showToolWrap();
                    return;
                }
                // 更新当前选中的的元素
                _this.selectedElement = options.target;
                // 严谨性判断
                if( _this.handleBox === null) return;
                // 判断当前选中的元素的类型
                if (options.target.get("type") === "image") {
                    // 图片类型显示操作图片的操作栏
                    _this.handleBox.showHandleImgBox();
                } else if (options.target.get("type") === "text") {
                    // 文本类型显示操作文本的操作栏
                    _this.handleBox.showHandleTextBox();
                }
            });
        },

        // 添加文字
        addText(value = "") {
            // 初始渲染的文字
            const text = new fabric.Text(value, {
                left: 10,
                top: 10,
                fontSize: 20,
                fontFamily: "宋体",
                fontWeigth: "bold",
                zIndex: 10
            });
            this.canvas.add(text);
            // 让新创建的text为选中元素
            this.selectedElement = text;
            return text;
        },

        // 添加图片
        async addImg(url) {
            if (!url) throw new Error("url值不可为空");
            return this.drawImgFromUrlToPromise(url).then(img => {
                this.canvas.add(img);
            });
        },

        // 删除元素
        removeElement(element){
            if(!element) return;
            return this.canvas.remove(element);
        },

        // 初始化函数
        init() {
            // 当选择画布中的对象时，该对象不出现在顶层。
            this.canvas.preserveObjectStacking = true;

            // 给画布绑定事件
            this.bindEvent();

            // 初始渲染的文字
            const initText = new fabric.Text("文字测试", {
                left: 10,
                top: 10,
                fontSize: 20,
                fontFamily: "宋体",
                fontWeight: "bold",
                fill: 'red'
            });
            // 绘制背景
            this.drawImgFromUrlToPromise(bg).then(bgImg => {
                bgImg.scale(0.5).set({ width: 600, height: 1000 });
                // 开始绘制
                this.canvas.add(bgImg, initText);
            });
        },

        // 整个组件点击事件
        fabricCanvasTouch(e){
            if(e.target === this.$refs.fabricCanvasTouch){
                // 显示初始面板
                this.handleBox.showToolWrap();
            }
        }
    },
    created() {
        const windowWidth = document.body.clientWidth;
        // 暂时写一个固定的尺寸后边在改
        this.canvasWidth = windowWidth * 0.8;
        this.canvasHeight = windowWidth * 1.3333;
    },
    mounted() {
        this.init();
    }
};
</script>

<style lang="less" scoped>
.fabric-canvas {
    text-align: center;
    .canvas-wrap {
        display: inline-block;
        border: 1px solid #ccc;
    }
}
</style>