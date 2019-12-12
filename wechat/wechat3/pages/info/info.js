const app = getApp()
// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: '', // 科目，1代表科目一，4代表科目四
        type: '', // 类型，顺序练习或模拟考试或错题回顾
        topicArr: [], // 题目对象集合
        current: 0, // swiper当前的显示页
        showIndex: 0,
        isTouch: false,
        isToNext: false,
        yesNum: 0,
        didArr: []
    },
    correct(e) {
        this.addDidArr(e.detail);
        if (this.data.type === 'test') {
            this.setData({
                yesNum: this.data.yesNum + 1
            })
        } else {
            wx.request({
                url: 'https://www.fqiang.co/addYesId',
                data: {
                    type: this.data.num,
                    topicType: this.data.type,
                    id: e.detail.id,
                    userId: app.globalData.userId
                },
                method: 'GET',
                success(res) {
                    // console.log(res)
                },
                fail(err) {
                    // console.log(err);
                }
            })
        }
        this.toNext();
    },
    toNext() {
        if (this.data.showIndex >= this.data.topicArr.length - 1) {
            if (this.data.type === 'test') {
                const results = this.data.yesNum * 20;
                const str = results >= 90 ? '成绩合格' : '成绩不合格';
                wx.showModal({
                    title: '考试结束',
                    content: `${str},分数：${results}分`,
                    //是否显示取消按钮,默认值true
                    showCancel: false,
                    success(res) {
                        if (res.confirm) {
                            wx.navigateTo({
                                url: '/pages/index/index'
                            })
                        }
                    }
                })
                return;
            }
            wx.showToast({
                title: '已经是最后一题',
                icon: 'success',
            })
            return;
        }
        this.setData({
            current: this.data.current + 1,
            isToNext: true
        })
    },
    wrong(e) {
        this.addDidArr(e.detail);
        if (this.data.type === 'test') return;
        wx.request({
            url: 'https://www.fqiang.co/addWrongId',
            data: {
                type: this.data.num,
                topicType: this.data.type,
                id: e.detail.id,
                userId: app.globalData.userId
            },
            method: 'GET',
            success(res) {
                // console.log(res)
            },
            fail(err) {
                // console.log(err);
            }
        })
    },
    onStart() {
        this.setData({
            isTouch: true
        })
    },
    onFinish(e) {
        if (e.detail.source != 'touch' && !this.data.isToNext) {
            this.setData({
                isTouch: false
            })
            return;
        }
        let current = e.detail.current;
        let showIndex = this.data.showIndex;
        if (current > 0) {
            showIndex = showIndex >= this.data.topicArr.length - 1 ? this.data.topicArr.length - 1 : showIndex + 1;
        } else {
            showIndex = showIndex <= 0 ? 0 : showIndex - 1;
        }
        current = showIndex == 0 ? 0 : 1;
        this.setData({
            showIndex,
            current,
            isToNext: false
        })
    },
    addDidArr( obj ) {
        this.setData({
            didArr: [...this.data.didArr, obj]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            type: options.type,
            num: options.num
        })
        let self = this;
        switch (options.type) {
            case 'order':  //顺章练习
                wx.request({
                    url: 'https://www.fqiang.co/getTopic',
                    data: {
                        type: options.num,
                        userId: app.globalData.userId
                    },
                    method: 'GET',
                    success(res) {
                        self.setData({
                            topicArr: res.data
                        })
                    },
                    fail(err) {
                        console.log(err);
                    }
                })
                break;

            case 'test': //模拟考试
                wx.request({
                    url: 'https://www.fqiang.co/getTestTopic',
                    data: {
                        type: options.num
                    },
                    method: 'GET',
                    success(res) {
                        self.setData({
                            topicArr: res.data
                        })
                    },
                    fail(err) {
                        console.log(err);
                    }
                })
                break;

            case 'wrong': //错题回顾
                wx.request({
                    url: 'https://www.fqiang.co/getWrongTopic',
                    data: {
                        type: options.num,
                        userId: app.globalData.userId
                    },
                    method: 'GET',
                    success(res) {
                        self.setData({
                            topicArr: res.data
                        })
                    },
                    fail(err) {
                        console.log(err);
                    }
                })
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

    }
})