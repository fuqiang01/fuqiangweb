// components/numbox/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isCollection: Boolean,
        sumObj: Object,
        showTimer: Boolean,
        countdownTime: Number, // 倒计时时间
    },

    /**
     * 组件的初始数据
     */
    data: {
        minutes: "",
        seconds: ""
    },
    observers: {
        "countdownTime": function(countdownTime){
            const minutes = Math.floor( countdownTime / 60 );
            const seconds = Math.floor(countdownTime % 60);
            this.setData({
                minutes: minutes < 10 ? "0" + minutes : minutes,
                seconds: seconds < 10 ? "0" + seconds : seconds
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onCollectionClick(e) {
            this.triggerEvent('oncollectionclick')
        }
    }
})
