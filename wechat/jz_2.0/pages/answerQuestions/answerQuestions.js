import {
    getTopicForSome,
    getTestTopic,
    getWrongTopic,
    getSum,
    addYesId,
    addWrongId,
    getTopic
} from "../../api/index.js"
import {removeDuplicateForObjArr} from "../../utils/util.js"

const app = getApp()
const util = require('../../utils/util.js');
// pages/info/info.js
Page({
    data: {
        userId: null, // 用户id
        currentSubject: null, // 当前科目
        practiceType: null, // 练习类型，是模拟考试还谁顺序练习。。。
        topicArr: [], // 题目对象集合
        current: 0, // swiper当前的显示页
        showIndex: 0, //显示项为当前题目数组的第几项
        yesNum: 0, // 模拟测试中，做对的题目总数
        didArr: [], // 存放做过了的题的信息，[{id: ..., classList: [...]}]
        sumObj: {
            yes: 0,
            no: 0,
            all: 0
        }, // 存放做对的题数量，做错的题的数量和题目总数
        timerStart: true, // 计时器是否开始运行
    },
    // 题目做正确了执行
    correct(e) { 
        this.addDidArr(e.detail);
        if (this.data.type === 'test') {
            this.setData({
                yesNum: this.data.yesNum + 1
            })
        } else {
            addYesId(this.data.currentSubject, this.data.userId, e.detail.id);
        }
        this.changeSumObj('yes');
        this.toNext();
    },
    // 自动跳到下一题
    toNext() {
        if (this.isLastTopic()) return;
        this.setData({
            current: this.data.showIndex + 1
        })
    },
    // 题目做错执行
    wrong(e) { 
        this.addDidArr(e.detail);
        this.changeSumObj('no');
        if (this.data.type === 'test') return;
        addWrongId(this.data.currentSubject, this.data.userId, e.detail.id);
    },
    // swiper动画结束时触发
    onFinish(e) { 
        this.setData({
            showIndex: e.detail.current
        })
    },
    // 将做过的题目的信息存起来，主要目的是因为一面翻过去了这题再返回回来的时候知道刚刚做题目选的什么
    addDidArr(obj) {
        this.setData({
            didArr: [...this.data.didArr, obj]
        })
    },
    // 根据练习的类型请求题目数据
    setTopicArr() {
        let title = '加载中...'; // 用来动态设置页面标题的
        // 根据练习类型确定要请求的题目]
        switch (this.data.practiceType) {
            case 'order':
                title = '顺章练习';
                // 请求少量的题目，懒加载
                getTopicForSome(this.data.currentSubject, this.data.userId).then(res => {
                     // 先判断当前是否还有没做完的题
                     if(res.data.length === 0){
                        // 全部按顺序做完了，直接弹框让用户退出当前页面或者重置所有选项（也就是把所有做过的题目清零）
                        wx.showModal({
                            title: "当前没有未做的题哦！",
                            content: "请点击确定按钮返回上一页，或者，点击重置按钮重置所有题目",
                            cancelText: "重置",
                            success(res){
                                console.log(res)
                                if(res.cancel){ // 点击的重置
                                    console.log("向服务器发送重置请求")
                                } else { // 点击的确定
                                    wx.navigateBack({delta: 1})
                                }
                            }
                        })
                    }
                    this.setData({
                        topicArr: res.data
                    })
                    // 关闭加载框
                    wx.hideLoading();
                }).then(_ => {
                    // 马上再请求所有题目，并且去掉重复的
                    getTopic(this.data.currentSubject, this.data.userId).then(res => {
                        const newArr = this.data.topicArr.concat(res.data);
                        this.setData({
                            topicArr: removeDuplicateForObjArr(newArr) // 调用一下去重函数
                        })
                    })
                })
                break;
            case 'test':
                title = '模拟考试';
                getTestTopic(this.data.currentSubject).then(res => {
                    this.setData({
                        topicArr: res.data
                    })
                    // 关闭加载框
                    wx.hideLoading();
                })
                break;
            case 'wrong':
                title = '错题回顾';
                getWrongTopic(this.data.currentSubject, this.data.userId).then(res => {
                    // 先判断当前是否错题
                    if(res.data.length === 0){
                        // 没有错题，直接弹框让用户退出当前页面
                        wx.showModal({
                            title: "当前没有错题哦！",
                            showCancel: false,
                            success(){
                                wx.navigateBack({delta: 1})
                            }
                        })
                    }
                    this.setData({
                        topicArr: res.data
                    })
                    // 关闭加载框
                    wx.hideLoading();
                })
        }
        // 设置标题为该练习类型
        wx.setNavigationBarTitle({
            title
        })
    },
    // 请求题目数量数据
    setSumObj() { 
        // 如果是模拟考试的话题目数量是固定的，不用发送请求
        if (this.data.practiceType === 'test') {
            this.setData({
                sumObj: {
                    yes: 0,
                    no: 0,
                    all: 50
                }
            })
            return;
        }
        getSum(this.data.currentSubject, this.data.userId).then(res => {
            switch(this.data.practiceType){
                case "order":
                    this.setData({
                        sumObj: {
                            yes: res.data.achieve - res.data.wrong,
                            no: res.data.wrong,
                            all: res.data.allNum
                        }
                    })
                    break;
                case "wrong":
                    this.setData({
                        sumObj: {
                            yes: 0,
                            no: 0,
                            all: res.data.wrong
                        }
                    })
            }
            
        })
    },
    // 修改题目数据
    changeSumObj(state) { 
        switch (state) {
            case 'yes':
                this.setData({
                    'sumObj.yes': this.data.sumObj.yes + 1,
                })
                break;
            case 'no':
                this.setData({
                    'sumObj.no': this.data.sumObj.no + 1,
                })
        }
    },
    // 显示模拟考试的成绩
    getResults() {
        const results = this.data.yesNum * 2;
        const str = results >= 90 ? '成绩合格' : '成绩不合格';
        wx.showModal({
            title: '考试结束',
            content: `${str},分数：${results}分`,
            //是否显示取消按钮,默认值true
            showCancel: false,
            success(res) {
                if (res.confirm) {
                    wx.reLaunch({
                        url: '/pages/index/index'
                    })
                }
            }
        })
    },
    // 考试结束事件
    onOver() {
        this.getResults();
    },
    // 是否到达最后一题了
    isLastTopic() {
        if (this.data.showIndex >= this.data.topicArr.length - 1) { // 到了最后一题了
            if (this.data.type === 'test') { // 做的模拟考试
                this.getResults();
                return true;
            }
            wx.showToast({
                title: '已经是最后一题',
                icon: 'success',
            })
            return true;
        }
        return false;
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        // 页面初始化时给用户id、当前科目和练习类型赋值
        this.setData({
            userId: app.globalData.userInfo.userId,
            currentSubject: app.globalData.currentSubject,
            practiceType: app.globalData.practiceType
        })
        // 显示一个加载框
        wx.showLoading({
            mask: true,
            title: '加载中...'
        })
        // 判断是否获取到了userId，如果还没有获取到就把调用函数写到回调中
        if (app.globalData.userInfo.userId) {
            this.setTopicArr();
            this.setSumObj();
        } else {
            app.globalData.loginCallback = userId => {
                this.setData({
                    userId
                })
                this.setTopicArr();
                this.setSumObj();
            }
        }
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
            path: '/pages/index/index'
        }
    }
})