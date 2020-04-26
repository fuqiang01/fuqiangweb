// components/leaveMsg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSuper: Boolean,
    msgInfo: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgWrapClass: "", // 图片包裹盒子的类名，一张为空串、两张和4张为sum2、3张或更多为more
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 全屏预览图片
    previewImage(e){
      wx.previewImage({
        urls: this.properties.msgInfo.imgUrls,
        current: e.currentTarget.dataset.src
      })
    }
  },
  // 生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      const imgLen = this.properties.msgInfo.imgUrls.length;
      let imgWrapClass = "";
      if(imgLen === 2 || imgLen === 4){
        imgWrapClass = "sum2";
      }else if(imgLen === 3 || imgLen > 4){
        imgWrapClass = "more";
      }
      this.setData({
        imgWrapClass
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
