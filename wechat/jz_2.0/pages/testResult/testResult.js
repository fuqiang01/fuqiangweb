import {
    getBestResult
} from "../../api/index.js";
import {
    getTagByScore
} from "../../utils/util.js"

const app = getApp();
// pages/resultRank/resultRank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        result: 100
    },
    // 设置导航栏背景色
    setNavBg(result) {
        const color = result >= 90 ? "#0BBFE5" : "#E28951";
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: color
        })
    },
    // 请求最好的成绩
    requestBestResult() {
        const subject = app.globalData.currentSubject;
        const userId = app.globalData.userInfo.userId;
        // 获取成绩列表
        getBestResult(subject, userId).then(res => {
            console.log(res)
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.requestBestResult();

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
        return {
            title: '摩托车驾照理论题',
            path: '/pages/index/index'
        }
    }
})