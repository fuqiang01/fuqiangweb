const app = getApp();
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    name: "",
    photoUrl: "/img/photo_1.jpg"
  },
  getUserInfo: function(e) {
    const name = e.detail.userInfo.nickName;
    const photoUrl = e.detail.userInfo.avatarUrl;
    app.globalData.userInfo.name = name;
    app.globalData.userInfo.photoUrl = photoUrl;
    this.setData({
      hasUserInfo: true,
      name,
      photoUrl
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo.name !== null){
      this.setData({
        hasUserInfo: true,
        name: app.globalData.userInfo.name,
        photoUrl: app.globalData.userInfo.photoUrl
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