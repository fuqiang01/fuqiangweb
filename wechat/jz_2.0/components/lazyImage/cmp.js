// components/lazyImage/cms.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        src: String,
        lazySrc: {
            type: String,
            value: "/img/lazyImg.png"
        },
        mode: {
            type: String,
            value: "scaleToFill"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isLoad: false, // 是否加载完成
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onLoad(){
            this.setData({
                isLoad: true
            })
        }
    }
})
