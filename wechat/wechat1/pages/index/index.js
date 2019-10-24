//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg : [
      "/img/banner.png",
      "/img/m_banner1.jpg",
      "/img/m_banner3.jpg"
    ],
    partnerList : [
      "/img/partner1.png",
      "/img/partner2.png",
      "/img/partner3.png",
      "/img/partner4.png",
      "/img/partner5.png",
      "/img/partner6.png"
    ],
    moreList : [
      { imgSrc : "/img/domore1.png", text : "公司审计"},
      { imgSrc : "/img/domore2.png", text : "社保公积金服务"},
      { imgSrc : "/img/domore3.png", text : "工商变更"},
      { imgSrc : "/img/domore4.png", text : "银行开户"},
      { imgSrc : "/img/domore5.png", text : "资金周转"},
      { imgSrc : "/img/domore6.png", text : "其他增值服务"}
    ],
    CSJDshow : true,
    newsTitleColor : {
      0 : "rgb(41, 167, 226)",
      1 : "#aaa"
    },
    CSJDlist : [
      "小规模纳税人记账报税,是选择月报好还是季报好呢?",
      "小规模纳税人记账报税,是选择月报好还是季报好呢?",
      "小规模纳税人记账报税,是选择月报好还是季报好呢?",
      "小规模纳税人记账报税,是选择月报好还是季报好呢?"
    ],
    DLJZlist : [
      "一般纳税人代理记账收费行情怎么样?标准如何?",
      "一般纳税人代理记账收费行情怎么样?标准如何?",
      "一般纳税人代理记账收费行情怎么样?标准如何?",
      "一般纳税人代理记账收费行情怎么样?标准如何?"
    ]
  },
  newsTitleTap : function (e) {

    var title = e.currentTarget.dataset.title;
    if ( title == 'csjd') {

      this.setData( {
        CSJDshow : true,
        newsTitleColor : {
          0 : "rgb(41, 167, 226)",
          1 : "#aaa"
        }
      })
    } else {

      this.setData( {
        CSJDshow : false,
        newsTitleColor : {
          0 : "#aaa",
          1 : "rgb(41, 167, 226)"
        }
      })
    }
  },

  // 跳往代理记账页面事件
  toDLJZ () {
    wx.switchTab( {
      url : "/pages/dljz/dljz"
    })
  },
  // 跳往公司注册页面事件
  toGSZC () {
    wx.switchTab( {
      url : "/pages/gszc/gszc"
    })
  },
  toSB () {
    wx.navigateTo( {
      url : "/pages/sb/sb"
    })
  }
})
