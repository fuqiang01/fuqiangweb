//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        testArr: [1, 2, 3, 4, 5, 6, 7, 8],
        activeIndex: 0,
        nowIndex: 0,
        arr: [],
        arrA: new Array(500),
        isIndex: 0,
        nowaIndex: 0,
    },
    onChange(e) {
        console.log(e)
        if ( e.detail.source != 'touch' ) {
            return false;
        }
        let index = e.detail.current;
        let activeIndex = index > 0 ? this.data.activeIndex + 1 : this.data.activeIndex - 1;
        let nowIndex = activeIndex == 0 ? 0 : activeIndex == this.data.testArr.length ? 2 : 1;
        let arr = [];
        if (activeIndex == 0) {
            arr = this.data.testArr.slice(0, 2);
        } else if (activeIndex == this.data.testArr.length) {
            arr = this.data.testArr.slice(activeIndex - 1, activeIndex + 1)
        } else {
            arr = this.data.testArr.slice(activeIndex - 1, activeIndex + 2)
        }
        console.log(`activeIndex:${activeIndex};nowIndex:${nowIndex};arr:${arr};`)
        this.setData({
            activeIndex: activeIndex,
            arr: arr,
            nowIndex: nowIndex
        })
    },
    onChangea(e) {
        console.log(111)
        this.setData({
            isIndex: e.detail.current,
        })
    },
    onLoad: function() {
        this.setData({
            arr: this.data.testArr.slice(0,2)
        })
    },
})