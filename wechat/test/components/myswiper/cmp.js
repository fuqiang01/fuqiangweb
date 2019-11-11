// components/myswiper/cmp.js
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
        arr: [1,2,3,4,5,6,7,8,9],
        translate: 0,
        nowIndex: 0,
        lastX: 0,
        roll: false
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeLeft(){
            this.setData({
                translate: (this.data.nowIndex + 1) * 100
            })
        },
        changeright(){
            this.setData({
                nowIndex: (this.data.nowIndex - 1) * 100
            })
        },
        onMove(e){
            let num = e.touches[0].pageX - this.data.lastX;
            if ( this.data.lastX == 0 ) {
                this.setData({
                    lastX: e.touches[0].pageX
                })
                return;
            }
            this.setData({
                lastX: e.touches[0].pageX,
                translate: this.data.translate + num/5
            })
        },
        onEnd(e){
            this.setData({
                lastX: 0
            })
        }
    },
    created() {
        // setInterval(() => {
        //     this.setData({
        //         translate: this.data.translate - 1
        //     })
        // }, 16);
    }
})
