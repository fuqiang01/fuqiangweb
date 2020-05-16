// components/curvedProgressBar/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        percentage: {
            type: Number,
            value: 0,
        }
    },
    observers: {
        'percentage': function(percentage){
            const angle = (percentage / 100) * (3 * Math.PI / 2) + (3 * Math.PI / 4);
            this.setData({
                maxAngle: angle
            })
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        maxAngle: null
    },


    /**
     * 组件的方法列表
     */
    methods: {
        // 绘制背景
        drawBg(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.arc(150, 85, 80, (Math.PI * 3 / 4), Math.PI / 4, 0);
            ctx.strokeStyle = "rgba(0,0,0,0.1)";
            ctx.stroke();
        },
        // 绘制某一帧进度条
        drawProgressByOne(ctx, currentAngle) {
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(150, 85, 80, (Math.PI * 3 / 4), currentAngle, 0);
            ctx.strokeStyle = "#fff";
            ctx.stroke();
        },
        // 绘制进度条，percentage为百分比[0,100]
        drawProgress(percentage) {
            const _this = this;
            const query = wx.createSelectorQuery().in(this);

            query.select('#curvedProgressBarCanvas')
                .fields({ node: true, size: true })
                .exec((res) => {
                    const canvas = res[0].node;
                    const ctx = canvas.getContext('2d');
                    // 设置线段样式为圆角
                    ctx.lineCap = "round";
                    // 先获取最终绘制完成对应的角度值
                    let angle = (percentage / 100) * (3 * Math.PI / 2) + (3 * Math.PI / 4);
                    // 当前角度值
                    let currentAngle = Math.PI * 3 / 4;
                    // 帧渲染函数
                    const renderLoop = () => {
                        ctx.clearRect(0, 0, 300, 150);
                        currentAngle += 0.05;
                        angle = _this.data.maxAngle === null ? angle : _this.data.maxAngle;
                        if (currentAngle >= angle) {
                            currentAngle = angle;
                            _this.drawBg(ctx);
                            _this.drawProgressByOne(ctx, currentAngle);
                            return;
                        }
                        _this.drawBg(ctx);
                        _this.drawProgressByOne(ctx, currentAngle);
                        canvas.requestAnimationFrame(renderLoop);
                    }
                    canvas.requestAnimationFrame(renderLoop);
                })
        }
    },
    lifetimes: {
        // 在组件实例进入页面节点树时执行
        attached: function () {
            this.drawProgress(this.properties.percentage);
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },
})
