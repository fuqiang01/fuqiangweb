// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicArr: [],
        current: 0,
        showIndex: 0,
        isTouch: false,
        isToNext: false
    },
    toNext() {
        console.log('收到跳转下一页信号');
        if ( this.data.showIndex >= this.data.topicArr.length - 1 ) {
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
    onStart() {
        this.setData({
            isTouch: true
        })
    },
    onFinish(e) {
        if (e.detail.source != 'touch' && !this.data.isToNext ) {
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
        console.log(current)
        this.setData({
            showIndex,
            current,
            isToNext: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        let self = this;
        switch (options.type) {
            case 'order':  //顺章练习
                wx.request({
                    url: 'https://www.fqiang.co/getTopic',
                    data: {
                        type: options.num
                    },
                    method: 'GET',
                    success(res) {
                        console.log(res)
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
                        console.log(res)
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
                        type: options.num
                    },
                    method: 'GET',
                    success(res) {
                        console.log(res)
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