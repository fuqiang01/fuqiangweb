// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicArr: [{
                id: 1,
                titleType: "多选题",
                titleText: "1这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这这是题目这是题目这是题目这是题目这是题目这这是题目这是题目这是题目这是题目这是题目这是题目",
                options: [
                    "这是选项一这是选项一这是选项一这是选项一这是选项一",
                    "这是选项二",
                    "这是选项三",
                    "这是选项四"
                ],
                answer: [1, 2],
                explain: '详细解释详细解释详细解释详细解释详细解释详细解释详细详细解释详细解释详细解释详细解释详细解释详细解释详细详细解释详细解释详细解释详细解释详细解释详细解释详细详细解释详细解释详细解释详细解释详细解释详细解释详细详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释1'
            },
            {
                id: 2,
                titleType: "多选题",
                titleText: "2这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目",
                options: [
                    "这是选项一这是选项一这是选项一这是选项一这是选项一",
                    "这是选项二",
                    "这是选项三",
                    "这是选项四"
                ],
                answer: [1, 2],
                explain: '1详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释'
            },
            {
                id: 3,
                titleType: "多选题",
                titleText: "3这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目",
                options: [
                    "这是选项一这是选项一这是选项一这是选项一这是选项一",
                    "这是选项二",
                    "这是选项三",
                    "这是选项四"
                ],
                answer: [1, 2],
                explain: '1详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释'
            },
            {
                id: 4,
                titleType: "多选题",
                titleText: "4这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目",
                options: [
                    "这是选项一这是选项一这是选项一这是选项一这是选项一",
                    "这是选项二",
                    "这是选项三",
                    "这是选项四"
                ],
                answer: [1, 2],
                explain: '1详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释'
            },
            {
                id: 5,
                titleType: "多选题",
                titleText: "5这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目",
                options: [
                    "这是选项一这是选项一这是选项一这是选项一这是选项一",
                    "这是选项二",
                    "这是选项三",
                    "这是选项四"
                ],
                answer: [1, 2],
                explain: '1详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释'
            }
        ],
        current: 0,
        showIndex: 0,
        isTouch: false
    },
    toNext() {
        console.log('收到跳转下一页信号')
        if (this.data.current >= this.data.topicArr.length) return;
        this.setData({
            current: this.data.current + 1
        })
    },
    onStart() {
        this.setData({
            isTouch: true
        })
    },
    onFinish(e) {
        if (e.detail.source != 'touch') {
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
            current
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        let self = this;
        wx.request({
            url: 'https://www.fqiang.co/getTopicAll',
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