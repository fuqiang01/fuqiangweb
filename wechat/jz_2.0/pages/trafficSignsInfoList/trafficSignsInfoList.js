import {getMarkByType} from "../../api/index.js"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0, // 用来初始化轮播图应该显示第几个
    showIndex: 0, // 当前显示的的是第几个，初始化的时候一定要跟current的值保持一致
    activeScale: 1.1,
    nextScale: 1,
    dataList: []
  },
  // 滑块运动时触发，动态改变滑块的scale
  onTransition(e){
    // 0 ~ 326
    const dx = e.detail.dx;
    const activeScale = 1.1 - Math.abs( dx / 3260);
    const nextScale = 1 + Math.abs(dx / 3260);
    this.setData({
      activeScale,
      nextScale
    })
  },
  // 动画结束时触发
  onFinish(e){
    this.setData({
      showIndex: e.detail.current,
      activeScale: 1.1,
      nextScale: 1
    })
    // 动态设置当前标题
    wx.setNavigationBarTitle({
      title: `${this.data.showIndex + 1}/${this.data.dataList.length}`
    });
  },
  // 请求数据
  requestMarkByType(){
    const index = app.globalData.markInfoListIndex;
    const markType = app.globalData.markType;
    const signsType = app.globalData.signsType;
    getMarkByType(markType, signsType).then(res => {
      this.setData({
        dataList: res.data.data,
        current: index,
        showIndex: index
      })
      // 动态设置当前标题
      wx.setNavigationBarTitle({
        title: `${index + 1}/${res.data.data.length}`
      });
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestMarkByType();
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