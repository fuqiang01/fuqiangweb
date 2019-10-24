// pages/gszc/gszc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    policyList : [
      { imgSrc:"/img/icon_3.png", title:"税收政策"},
      { imgSrc:"/img/icon_4.png", title:"社保政策"},
      { imgSrc:"/img/icon_5.png", title:"扶持政策"},
      { imgSrc:"/img/icon_6.png", title:"房租政策"},
      { imgSrc:"/img/icon_7.png", title:"人才政策"},
      { imgSrc:"/img/icon_8.png", title:"贷款政策"},
      { imgSrc:"/img/icon_9.png", title:"知识产权"},
      { imgSrc:"/img/icon_10.png", title:"全部政策"},
    ],
    moreList : [
      { imgSrc:"/img/icon_17.png", title:"财税服务"},
      { imgSrc:"/img/icon_17.png", title:"社保开户"},
      { imgSrc:"/img/icon_19.png", title:"税控托管"},
      { imgSrc:"/img/icon_20.png", title:"企业筹划"},
      { imgSrc:"/img/icon_21.png", title:"个人税筹"},
      { imgSrc:"/img/icon_22.png", title:"汇算清缴"},
      { imgSrc:"/img/icon_23.png", title:"财务审计"},
      { imgSrc:"/img/icon_24.png", title:"出口退税"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addressChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  industryTypeChange: function (e) {
    this.setData({
      industryTypeIndex: e.detail.value[1]
    });
  },

  industryTypeColumnChange : function (e) {

    if ( e.detail.column == 1 ) {
      return;
    }

    var arr = this.data.industryType;
    switch ( e.detail.value) {
      case 0 : {
        arr[1] = [
                  "网络科技",
                  "通讯科技",
                  "激光科技",
                  "海洋科技",
                  "生物医药科技",
                  "新能源科技"
                ]
      }
      break;
      case 1 : {
        arr[1] = [ "11111111"]
      }
      break;
      case 2 : {
        arr[1] = [ "2222222"]
      }
      break;
      case 3 : {
        arr[1] = [ "3333333"]
      }
    }
    this.setData( {
      industryType : arr
    })
  },

  companyTypeChange: function (e) {
    this.setData({
      companyTypeIndex: e.detail.value
    })
  },

  toDLJZ () {
    wx.switchTab( {
      url : "/pages/dljz/dljz"
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