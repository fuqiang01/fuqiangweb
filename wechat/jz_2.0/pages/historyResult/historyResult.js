// pages/resultRank/resultRank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        highestNum: 100, // 历史最高分
        topicNumObj: {
            yesNum: 0, // 做对的题目数量
            wrongNum: 0, // 做错的题目数量
            notMakeNum: 0 // 未做的题目数量
        },
        performanceList: [
            {
                id: 1,
                score: "6",
                timeConsuming: "0分26秒",
                date: "2020-04-18",
                tag: "马路杀手"
            },
            {
                id: 2,
                score: "100",
                timeConsuming: "0分26秒",
                date: "2020-04-18",
                tag: "马路杀手"
            }
        ]
    },
    // 设置导航栏背景色
    setNavBg(){
        const color = this.data.highestNum >= 90 ? "#0BBFE5" : "#E28951";
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: color
        })
    },
    // 绘制画布
    drawCanvas(){
        const ctx = wx.createCanvasContext('myCanvas');
        // 设置线段为圆角
        ctx.lineCap = "round"; 
        // 先获取当前最高成绩对应的角度值
        const angle = (this.data.highestNum / 100) * (3 * Math.PI / 2) + (3 * Math.PI / 4);
        let currentAngle = Math.PI * 3 / 4;
        
        const timer = setInterval(() => {
            if(currentAngle >= angle){
                currentAngle = angle;
                clearInterval(timer);
            }
            // 绘制进度条背景
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.arc(150, 85, 80, (Math.PI * 3 / 4), Math.PI / 4, 0);
            ctx.strokeStyle = "rgba(0,0,0,0.1)";
            ctx.stroke();
            // 绘制进度条
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.arc(150, 85, 80, (Math.PI * 3 / 4), currentAngle, 0);
            ctx.strokeStyle = "#fff";
            ctx.stroke();
            ctx.draw();
            currentAngle += 0.05;
        }, 1000/60);

        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setNavBg();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.drawCanvas();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})