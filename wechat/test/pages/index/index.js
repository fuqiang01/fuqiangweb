Page({
  data: {
    // 模拟数据
    dataArr: [
      {id: 1, text: "文本一"},
      {id: 2, text: "文本二"},
      {id: 3, text: "文本三"},
      {id: 4, text: "文本四"},
      {id: 5, text: "文本五"},
      {id: 6, text: "文本六"},
      {id: 7, text: "文本七"},
      {id: 8, text: "文本八"},
      {id: 9, text: "文本九"},
      {id: 10, text: "文本十"}
    ],    
    // 当前显示的是第几个swiper-item
    current: 0,
    // 用来处理实际渲染的swiper-item是从数据列表的第几个数据开始的
    min: 0,
    // 要渲染的swiper-item数量
    count: 3,
  },
  // 滑动动画结束触发
  onFinish(e){
    let {min, count} = this.data;
    let current = e.detail.current;
    // 获取正常情况下应该显示第几个swiper-item
    const centerIndex = Math.ceil(count / 2) - 1;
    if (
      // 如果当前的页码大于了应该居中显示的页码，那么就让轮播图列表的最前边一张消失，在最后边添加一张
      // 还要判断是否已经显示到了最后一张了，如果显示到了最后一张了那就不用再调整显示数量以及当前显示的第几页了
      (current > centerIndex && min + count < this.data.dataList.length) ||
      // 如果当前页码小于了应该居中显示的页码，那么就让轮播图最前边添加一张，最后边消失一张
      // 还要判断是否已经显示到第一张了，如果是则不用调整
      (current < centerIndex && min > 0)
    ) {
      this.setData({
        min: min + current - centerIndex,
        current: centerIndex
      })
    }
  }
})
