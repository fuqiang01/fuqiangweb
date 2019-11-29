
const app = getApp()
// pages/page/page.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgSrc: '',
        num: 0,
        sumObj: {}
    },
    onTap(e) {
        let type = e.currentTarget.dataset.type;
        if ( type === 'wrong' && this.data.sumObj.wrong === 0) {
            wx.showToast({
                title: '当前没有错题',
                icon: 'success',
            })
            return;
        } else if ( type === 'order' && this.data.sumObj.achieve === this.data.sumObj.allNum ) {
            wx.showToast({
                title: '题目已做完',
                icon: 'success',
            })
            return;
        }
        wx.navigateTo({
            url: `/pages/info/info?num=${this.data.num}&type=${type}`
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if ( options.num == 1 ) {
            this.setData({
                imgSrc: '/img/bg1.jpg',
                num: options.num
            })
        } else {
            this.setData({
                imgSrc: '/img/bg2.jpg',
                num: options.num
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
        let self = this;
        wx.request({
            url: 'https://www.fqiang.co/getSum',
            data: {
                type: this.data.num,
                userId: app.globalData.userId
            },
            method: 'GET',
            success(res) {
                console.log(res)
                self.setData({
                    sumObj: res.data
                })
            },
            fail(err) {
                console.log(err);
            }
        })
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