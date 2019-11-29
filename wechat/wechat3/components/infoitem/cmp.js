// components/infoitem/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        topicObj: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        optionT: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
        classList: new Array(10),
        showExplain: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        optionTap(e){
            let index = e.currentTarget.dataset.index;
            let arr = this.data.classList;
            arr[index] = arr[index] == 'blue' ? '' : 'blue';
            this.setData( {
                classList: arr
            })
            if ( this.data.topicObj.titleType == "多选题" ) return;
            if( index == this.data.topicObj.answer[0] ) { //正确
                this.triggerEvent('correct',{ id: this.properties.topicObj.id});
            } else { // 错误
                arr[index] = 'red';
                this.setData({
                    showExplain: true,
                    classList: arr
                })
                console.log('将错题id上传服务器')
                this.triggerEvent('wrong',{ id: this.properties.topicObj.id});
            }
        },
        submitBtnTap(){
            let classList = this.data.classList;
            let showExplain = false;
            this.data.topicObj.answer.forEach(ele => {
                if ( classList[ele] != 'blue' ) {
                    classList[ele] = 'green';
                    console.log(classList);
                    showExplain = true;
                }
            });
            for ( let i = 0; i < this.data.topicObj.options.length; i++ ) {
                if ( classList[i] == 'blue' && !this.data.topicObj.answer.includes(i.toString() ) ) {
                    classList[i] = 'red';
                    showExplain = true;
                }
            }
            if ( !showExplain ){ //正确
                this.triggerEvent('correct',{ id: this.properties.topicObj.id});
            } else { // 错误
                this.setData({
                    classList,
                    showExplain
                })
                console.log('将错题id上传服务器')
                this.triggerEvent('wrong',{ id: this.properties.topicObj.id});
            }
            
        }
    }
})
