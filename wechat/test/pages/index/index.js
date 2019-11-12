//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        testArr: [1, 2, 3, 4, 5, 6, 7, 8],
        activeIndex: 0,
        nowIndex: 0,
        arr: [],
        isTouch: false,

        arrA: [1, 2, 3, 4, 5, 6, 7, 8],
        currentA: 0,
        nowIndexA: 0,
        isTouchA: false,
    },
    onStart(){
        this.setData({
            isTouch: true
        })
    },
    onEnd(){
        this.setData({
            isTouch: false
        })
    },
    onFinish(e) {
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
    onStartA(){
        this.setData({
            isTouchA: true
        })
    },
    onEndA(){
        this.setData({
            isTouchA: false
        })
    },
    onFinishA(e) {
        if ( e.detail.source != 'touch') {
            console.log('触发')
            return false;
        }
        let index = e.detail.current;
        let nowIndexA;
        if ( index > 0 ){
            let temp = this.data.nowIndexA + 1;
            nowIndexA = temp >= this.data.arrA.length - 1 ? this.data.arrA.length - 1 : temp;
        } else{
            let temp = this.data.nowIndexA - 1;
            nowIndexA = temp <= 0 ? 0 : temp;
        }
        let currentA = nowIndexA == 0 ? 0 : 1;
        this.setData({
            nowIndexA,
            currentA
        })
    },
    onLoad: function() {
        this.setData({
            arr: this.data.testArr.slice(0,2)
        })
    },
})