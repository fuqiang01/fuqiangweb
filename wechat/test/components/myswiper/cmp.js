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
        roll: false,
        num: 0,
        transitionDuration: 0,
        newArr: [],
    },
    /**
     * 组件的方法列表
     */
    methods: {
        move(){
            let arr = [];
            if( this.data.nowIndex === 0 ){
                arr = this.data.arr.slice(0,2);
            } else if( this.data.nowIndex === this.data.arr.length - 1) {
                arr = this.data.arr.slice(this.data.nowIndex - 1, this.data.nowIndex + 1)
            } else{
                arr = this.data.arr.slice(this.data.nowIndex - 1, this.data.nowIndex + 2)
            }
            this.setData({
                newArr: arr
            })
        },
        changeLeft(){
            if ( this.data.nowIndex !== this.data.newArr.length - 1 ){
                this.setData({
                    nowIndex: this.data.nowIndex + 1
                })
            };
            this.setData({
                transitionDuration: 0.3,
                translate: this.data.nowIndex * -100
            })
            setTimeout(() => {
                this.setData({
                    transitionDuration: 0
                    
                })
            }, 300);
        },
        changeright(){
            if ( this.data.nowIndex !== 0 )  {
                this.setData({
                    nowIndex: this.data.nowIndex - 1
                })
            };
            this.setData({
                transitionDuration: 0.3,
                translate: this.data.nowIndex * -100,
            })
            setTimeout(() => {
                this.setData({
                    transitionDuration: 0
                })
            }, 300);
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
                translate: this.data.translate + num/5,
                num: num
            })
        },
        onEnd(e){
            let num = this.data.num;
            if ( Math.abs( num ) >= 15 ) {
                if ( num > 0 ) {
                    this.changeright();
                } else {
                    this.changeLeft();
                }
            } else{
                let offset = this.data.translate + this.data.nowIndex * 100;
                if ( Math.abs( offset ) >= 30 ) {
                    if( offset < 0 ) {
                        this.changeLeft();
                    } else {
                        this.changeright();
                    }
                } else{
                    this.setData({
                        transitionDuration: 0.3,
                        translate: this.data.nowIndex * -100,
                    })
                    setTimeout(() => {
                        this.setData({
                            transitionDuration: 0
                        })
                    }, 300);
                }
                
            }
            this.setData({
                lastX: 0,
            })
        }
    },
    
    attached() {
        this.setData({
            newArr: this.data.arr.slice(0,2)
        })
    }
})
