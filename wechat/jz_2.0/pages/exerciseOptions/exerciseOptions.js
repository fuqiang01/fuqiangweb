// pages/exerciseOptions/exerciseOptions.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 跳转到答题页面
  goAQPage(e){
    const {practice} = e.currentTarget.dataset;
    app.globalData.practiceType = practice;
    wx.navigateTo({
      url: "/pages/answerQuestions/answerQuestions"
    })
  },
  // 跳转到章节列表页面
  goCLPage(e){
    wx.navigateTo({
      url: "/pages/chapterList/chapterList"
    })
  },
  // 跳转到章节练习页面
  goSPPage(e){
    wx.navigateTo({
      url: "/pages/specialPractice/specialPractice"
    })
  },
  // 跳转到历史成绩页面
  goHRPage(e){
    wx.navigateTo({
      url: "/pages/historyResult/historyResult"
    })
  },
  // 跳转到排行榜页面
  goRLPage(e){
    wx.navigateTo({
      url: "/pages/rankingList/rankingList"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const currentSubject = parseInt(app.globalData.currentSubject);
    let title = "未知";
    switch(currentSubject){
      case 1:
        title = "科目一";
        break;
      case 4: 
        title = "科目四";
    }
    // 动态设置标题
    wx.setNavigationBarTitle({
      title
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