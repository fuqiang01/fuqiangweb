const app = getApp();
// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSuper: false, //是否为超级用户
    msgList: [{
      id: 1,
      name: "Alan",
      date: "2020年4月20日 21:42",
      msgText: "这是留言内容",
      photoUrl: "/img/photo_1.jpg",
      replyMsg: "作者回复消息",
      imgArr: ["/img/photo_1.jpg"]
    }]
  },
  getUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  // 跳转到填写留言页面
  goWMPage(e){
    wx.navigateTo({
      url: "/pages/writeMsg/writeMsg"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isSuper: app.globalData.userInfo.isSuper
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