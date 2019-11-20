//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onTap( e ) {
    let num = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/page/page?num=${num}`
    })
  },
  onLoad: function () {
  },
})
