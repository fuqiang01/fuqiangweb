import {
  getMessageByPage,
  updateNameAndPhoto,
  getMessagesByUser
} from "../../api/index.js";
import {
  addZero
} from "../../utils/util.js"
const app = getApp();
// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSuper: false, //是否为超级用户
    pageNumber: 0, // 当前第几页，从0开始
    pageCapacity: 10, // 每一页显示多少条
    msgList: [], // 留言数组
    isLastPage: false, // 是否是最后一页
    isAllMessagePage: true, // 当前是否是所有留言的界面
  },
  getUserInfo(e) {
    const name = e.detail.userInfo.nickName;
    const photoUrl = e.detail.userInfo.avatarUrl;
    app.globalData.userInfo.name = name;
    app.globalData.userInfo.photoUrl = photoUrl;
    this.setData({
      hasUserInfo: true,
      name,
      photoUrl
    })
    // 上传用户信息
    const userId = app.globalData.userInfo.userId;
    updateNameAndPhoto(userId, name, photoUrl);
  },
  // 跳转到填写留言页面
  goWMPage(e) {
    wx.navigateTo({
      url: "/pages/writeMsg/writeMsg"
    })
  },
  // 切换留言显示
  swiperMessage(){
    this.setData({
      isAllMessagePage: !this.data.isAllMessagePage
    })
    // 调用下拉刷新
    wx.startPullDownRefresh();
  },
  // 请求留言数据
  requestMessage(){
    if(this.data.isAllMessagePage){
      this.requestAllMessage()
    }else{
      this.requestUserMessage()
    }
  },
  // 按页请求留言
  requestAllMessage() {
    // 如果已经是最后一页了就不用再加载了
    if(this.data.isLastPage) return;
    const pageNumber = this.data.pageNumber;
    const pageCapacity = this.data.pageCapacity;
    getMessageByPage(pageNumber, pageCapacity).then(res => {
      const msgList = this.handleMsgList(res.data.data);
      // 如果请求回的数据小于每页的数据就说明这已经是最后一页了
      if(msgList.length < pageCapacity){
        this.setData({
          isLastPage: true
        })
      }
      // 如果页码为0，说明第一次请求直接替换，否则拼接数组
      const newMsgList = pageNumber == 0 ? msgList : [...this.data.msgList, ...msgList];
      this.setData({
        msgList: newMsgList
      })
      // 结束下拉刷新
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    })
  },
  // 请求用户自己的留言
  requestUserMessage() {
    const userId = app.globalData.userInfo.userId;
    const name = app.globalData.userInfo.name;
    const photoUrl = app.globalData.userInfo.photoUrl;
    getMessagesByUser(userId).then(res => {
      const msgList = this.handleMsgList(res.data.data);
      // 自己留言后台返回的数据是没有用户信息的，这里自己加到留言数据中去
      const newMsgList = msgList.map(msg => {
        msg.user = {
          name,
          photoUrl
        }
        return msg;
      })
      this.setData({
        msgList: newMsgList,
        pageNumber: 0, // 将所有留言的页码改为0
        isLastPage: true // 因为自己留言就一页不存在懒加载一说，所以直接是最后一页
      })
      // 结束下拉刷新
      wx.stopPullDownRefresh()
    })
  },
  // 把从后端请求的数据处理成前端展示需要的数据
  handleMsgList(data) {
    return data.map(msg => {
      const date = new Date(msg.createTime);
      const Y = date.getFullYear();
      const M = addZero(date.getMonth() + 1);
      const D = addZero(date.getDate());
      const H = addZero(date.getHours());
      const Min = addZero(date.getMinutes());
      const S = addZero(date.getSeconds());
      const createTime = `${Y}年${M}月${D}日 ${H}:${Min}:${S}`;
      const imgUrls = msg.imgUrls.split(";").map(url => "http://cos.fqiang.co/jz/message/" + url);
      return {
        ...msg,
        createTime,
        imgUrls
      }
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
  onShow() {
    console.log("加载")
    // 每次进入页面就自动进行一次下拉刷新
    wx.startPullDownRefresh();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 初始化页码
    this.setData({
      pageNumber: 0
    })
    // 请求数据
    this.requestMessage();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 如果是自己留言界面的话触底啥也不干
    if(!this.data.isAllMessagePage) return;
    this.setData({
      pageNumber: this.data.pageNumber + 1
    })
    if(!this.data.isLastPage){
      wx.showNavigationBarLoading();
      this.requestMessage();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})