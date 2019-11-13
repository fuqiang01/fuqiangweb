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
        // topicObj: {
        //     id: 1,
        //     titleType: "多选题",
        //     titleText: "这是题目",
        //     options: [
        //         "这是选项一",
        //         "这是选项二",
        //         "这是选项三",
        //         "这是选项四"
        //     ],
        //     answer: [1,2],
        //     explain: '详细解释'
        // },
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
            if( index == this.data.topicObj.answer[0] ) {
                this.triggerEvent('tonext');// 触发切换下一题事件
            } else {
                arr[index] = 'red';
                this.setData({
                    showExplain: true,
                    classList: arr
                })
                console.log('将错题id上传服务器')
            }
        },
        submitBtnTap(){
            let classList = this.data.classList;
            let showExplain = false;
            for ( let i = 0; i < this.data.topicObj.options.length; i++ ) {
                this.data.topicObj.answer.forEach(ele => {
                    if ( classList[ele] != 'blue' ) {
                        classList[ele] = 'green';
                        showExplain = true;
                    }
                });
                if ( classList[i] == 'blue' && !this.data.topicObj.answer.includes(i)){
                    classList[i] = 'red';
                    showExplain = true;
                }
            }
            if ( !showExplain ){
                this.triggerEvent('tonext'); // 触发切换下一题事件
            } else {
                this.setData({
                    classList,
                    showExplain
                })
                console.log('将错题id上传服务器')
            }
            
        }
    }
})
