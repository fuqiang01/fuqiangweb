import {
    getRightWrongNotDoneTopicNumber,
    getAllResult,
} from "../../api/index.js";
import { addZero } from "../../utils/util.js"

const app = getApp();
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
        performanceList: []
    },
    // 设置导航栏背景色
    setNavBg(highestNum) {
        const color = highestNum >= 90 ? "#0BBFE5" : "#E28951";
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: color
        })
    },
    // 绘制画布
    drawCanvas(highestNum) {
        const ctx = wx.createCanvasContext('myCanvas');
        // 设置线段为圆角
        ctx.lineCap = "round";
        // 先获取当前最高成绩对应的角度值
        const angle = (highestNum / 100) * (3 * Math.PI / 2) + (3 * Math.PI / 4);
        let currentAngle = Math.PI * 3 / 4;
        const timer = setInterval(() => {
            if (currentAngle >= angle) {
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
        }, 1000 / 60);
    },
    // 请求数据
    requestData() {
        const subject = app.globalData.currentSubject;
        const userId = app.globalData.userInfo.userId;
        // 获取各种题目的数量
        getRightWrongNotDoneTopicNumber(subject, userId).then(res => {
            const data = res.data.data;
            this.setData({
                topicNumObj: {
                    yesNum: data.rightNumber,
                    wrongNum: data.wrongNumber,
                    notMakeNum: data.notDoneNumber
                },
            })
        })
        // 获取成绩列表
        getAllResult(subject, userId).then(res => {
            const data = res.data.data;
            const highestNum = this.getHighestNum(data);
            // 设置navbar背景色
            this.setNavBg(highestNum);
            // 绘制进度条动画
            this.drawCanvas(highestNum);
            // 加工数据成想要的格式
            const performanceList = this.getPerformanceList(data);
            this.setData({
                performanceList,
                highestNum
            })
        })
    },
    // 根据分数列表获取最高分
    getHighestNum(resultList) {
        let highestNumber = 0;
        resultList.forEach(ele => {
            if (ele.score > highestNumber) {
                highestNumber = ele.score;
            }
        });
        return highestNumber;
    },
    // 根据后台给的数据，加工展示需要的数据
    getPerformanceList(data){
        return data.map(result => {
            const timeConsuming = `${Math.floor(result.timeConsuming / 60)}分${result.timeConsuming % 60}秒`;
            const date = new Date(result.createTime)
            const createTime = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
            let tag;
            if(result.score < 90){
                tag = "马路杀手";
            }else if(result.score < 98){
                tag = "新人上路"
            }else{
                tag = "驾考王者"
            }
            return {
                ...result,
                score: result.score,
                timeConsuming,
                createTime,
                tag
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.requestData();

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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