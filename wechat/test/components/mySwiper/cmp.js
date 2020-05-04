// components/mySwiper/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataArr: [{
        id: 1,
        text: "文本一"
      },
      {
        id: 2,
        text: "文本二"
      },
      {
        id: 3,
        text: "文本三"
      },
      {
        id: 4,
        text: "文本四"
      },
      {
        id: 5,
        text: "文本五"
      },
      {
        id: 6,
        text: "文本六"
      },
      {
        id: 7,
        text: "文本七"
      },
      {
        id: 8,
        text: "文本八"
      },
      {
        id: 9,
        text: "文本九"
      },
      {
        id: 10,
        text: "文本十"
      }
    ],
    current: 0,
    min: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onFinish(e) {
      console.log("finish:", e.detail)
      if (e.detail.current >= 2) {
        this.setData({
          min: this.data.min + e.detail.current - 1,
          current: 1
        })
      } else if (e.detail.current == 0) {
        if (this.data.min == 0) return;
        this.setData({
          min: this.data.min - 1,
          current: 1
        })
      }
    },
  }
})