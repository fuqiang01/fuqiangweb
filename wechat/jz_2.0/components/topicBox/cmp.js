// components/infoitem/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      topicObj: Object, // 题目的数据
      didArr: Array // 做过了的题目数据[{id: ..., classList: [...] } ]
  },

  /**
   * 组件的初始数据
   */
  data: {
      testType: ["判断题","单选题","多选题"], // 题目类型后台传的是数字，这里映射成文字
      optionT: [ 'A', 'B', 'C', 'D'],//选项字母数组
      classList: new Array(4),//存放点击后的类名的数组
      showExplain: false, // 是否显示注释
      isDid: false // 该题目是否做够
  },
  attached(){
      const topicObj = this.properties.topicObj;
      const didArr = this.properties.didArr;
      didArr.forEach( ele => {
          if ( ele.id === topicObj.id ) { //如果这题做过了
              this.setData({
                  classList: ele.classList,
                  isDid: true
              })
          }
      })
  },
  /**
   * 组件的方法列表
   */
  methods: {
      optionTap(e){ //选项点击事件
          if ( this.data.isDid ) return; //该题如果被做过了，点击什么都不做
          let index = e.currentTarget.dataset.index;
          let arr = this.data.classList;
          const id = this.properties.topicObj.id;
          arr[index] = arr[index] == 'blue' ? '' : 'blue';
          this.setData( {
              classList: arr
          })
          if ( this.data.topicObj.titleType == "多选题" ) return; //是多选题的话不在这处理
          this.setData({
              isDid: true
          })
          if( index == this.data.topicObj.answer[0] ) { //正确
              this.triggerEvent('correct',{ id: id, classList: arr});
          } else { // 错误
              arr[index] = 'red';
              this.setData({
                  showExplain: true,
                  classList: arr
              })
              this.triggerEvent('wrong',{ id: id, classList: arr});
          }
      },
      submitBtnTap(){ // 多选题提交事件
          if ( this.data.isDid ) return;//该题如果被做过了，点击什么都不做
          this.setData({
              isDid: true
          })
          let classList = this.data.classList;
          let showExplain = false;
          const id = this.properties.topicObj.id;
          this.data.topicObj.answer.forEach(ele => {
              if ( classList[ele] != 'blue' ) {
                  classList[ele] = 'green';
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
              this.triggerEvent('correct',{ id, classList});
          } else { // 错误
              this.setData({
                  classList,
                  showExplain
              })
              this.triggerEvent('wrong',{ id, classList});
          }
          
      },
  }
})
