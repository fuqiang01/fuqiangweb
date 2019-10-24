// pages/dljz/dljz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    business : ["active",null,null,null],
    advantageList : [
      { main : "互动性强", vice : "手机app实时查看,实时监督,实时沟通"},
      { main : "财税风险预警", vice : "发现问题，及时提出预警和规避方案"},
      { main : "全方位财税服务", vice : "专属财税顾问一对一解答一切财税问题"},
      { main : "责任赔付", vice : "我方责任，全部承担"},
      { main : "技术领先", vice : "自主研发做账软件，三重审核杜绝人工错误"}
    ],
    problemList : [
      { q : "代理记账需要提供什么材料？", a : "费用发票(即现金单据)、银行单据、收入购进单据、发票、报表公章等"},
      { q : "什么票据可以做账？", a : "发票、银行单据、工资表、报税所需证件及其他会计资料等，具体可以联系客服为您解答疑惑"},
      { q : "代理记账”包括哪些服务？", a : "简单来说，包括每月票据分类、整理、装订，做账，出具凭证、报表，账本，报税。解答财税疑难问题、规避财税风险"},
      { q : "刚注册的公司，什么时候开始纳税？", a : "一般初创企业属于小规模纳税人企业，需要在领取税务登记证的次月开始申报国地税"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  businessNumTap ( e) {
    const index = e.currentTarget.dataset.index;
    let arr = new Array(4);
    arr[index] = "active";
    this.setData( {
      business : arr
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