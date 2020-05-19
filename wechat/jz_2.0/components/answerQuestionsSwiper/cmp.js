// components/answerQuestionsSwiper/cmp.js
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
        current: 0, // 用来初始化轮播图应该显示第几个
        showIndex: 0, // 当前显示的的是第几个，初始化的时候一定要跟current的值保持一致
        dataList: [{
                id: 56,
                subject: 1,
                title: '这个标志是何含义？',
                options: ['路面高突', '驼峰桥', '路面低洼', '路面不平'],
                answer: ['0'],
                topicExplain: '警告标志，路面高突。2个凸起是路面不平，凹进去是路面低洼，空心的是驼峰桥，1个凸起是路面高突。',
                imgUrl: '',
                createTime: '1588040901603',
                updateTime: '1588040901603',
                testType: '单选题',
                knowledgeType: '标志题',
                classList: [null, null, 'red', null],
            },
            {
                id: 57,
                subject: 1,
                title: '这个标志是何含义？',
                options: ['路面高突', '驼峰桥', '路面低洼', '路面不平'],
                answer: ['0'],
                topicExplain: '警告标志，路面高突。2个凸起是路面不平，凹进去是路面低洼，空心的是驼峰桥，1个凸起是路面高突。',
                imgUrl: '',
                createTime: '1588040901603',
                updateTime: '1588040901603',
                testType: '单选题',
                knowledgeType: '标志题',
            },
        ], // 数据
        minIndex: 0, // 当前轮播图显示最前边的一张应该是数组的第几项 
        showCount: 3, // 一共需要显示几页轮播图  
        sumObj: {
            yes: 1,
            no: 2,
            all: 10
        }, // 存放做对的题数量，做错的题的数量和题目总数
        topicBoxIsBg: false, // topicBox组件是否充当背景在使用
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 动画结束时触发
        onFinish(e) {
            // 将前一次dx的值初始化为空，缩放
            // prev = null;
            let {
                minIndex,
                showCount
            } = this.data;
            let current = e.detail.current;
            // 获取正常情况下应该显示在第几页
            const centerIndex = Math.ceil(showCount / 2) - 1;
            if (
                // 如果当前的页码大于了应该居中显示的页码，那么就让轮播图列表的最前边一张消失，在最后边添加一张
                // 还要判断是否已经显示到了最后一张了，如果显示到了最后一张了那就不用再调整显示数量以及当前显示的第几页了
                (current > centerIndex && minIndex + showCount < this.data.dataList.length) ||
                // 如果当前页码小于了应该居中显示的页码，那么就让轮播图最前边添加一张，最后边消失一张
                // 还要判断是否已近显示到第一张了，如果是则不用调整
                (current < centerIndex && minIndex > 0)
            ) {
                minIndex = minIndex + current - centerIndex;
                current = centerIndex;
                this.setData({
                    minIndex,
                    current
                })
            }
            // 将以下数值更新
            this.setData({
                showIndex: minIndex + current
            })
        },
        // 跳转到指定的某一项
        goItemByIndex(index) {
            const len = this.data.dataList.length;
            wx.hideLoading();
            // 计算如果是居中显示的话，那么curren的值是多少
            const centerIndex = Math.ceil(this.data.showCount / 2) - 1;
            // 计算minIndex的值
            let minIndex = index - centerIndex;
            if (minIndex < 0) {
                minIndex = 0;
            } else if (minIndex + this.data.showCount > len) {
                minIndex = len - this.data.showCount;
            }
            // 计算current的值
            let current = centerIndex;
            if (index <= centerIndex) {
                current = index;
            } else if (index >= len - centerIndex) {
                current = centerIndex - len + index + 1 + centerIndex;
            }
            this.setData({
                current,
                showIndex: current,
                minIndex
            })
        },
        // 题目做错了的回调
        wrong(e) {
            this.addClassList(e.detail);
            this.changeSumObj('no');
            // 去判断是否是最后一题了
            // this.isLastTopic();
            // if (this.data.practiceType === 'test') {
            //     // 如果是模拟考试中做错题目了，那么就把这个题目数据存到全局，后边可能有用
            //     const id = e.detail.id;
            //     const wrongTopic = this.data.topicArr.find(topic => topic.id = id);
            //     app.globalData.testWrongTopics.push(wrongTopic);
            //     return;
            // }
            // addWrongTopic(this.data.currentSubject, this.data.userId, e.detail.id);
        },
        // 题目做正确了的回调
        correct(e) {
            this.addClassList(e.detail);
            this.changeSumObj('yes');
            this.toNext();
            // if (this.data.practiceType === 'test') return;
            // addRightTopic(this.data.currentSubject, this.data.userId, e.detail.id);
        },
        // topic-num-box的显示与影藏的回调
        onhandletopicnumbox(e) {
            this.setData({
                topicBoxIsBg: e.detail
            })
        },
        // 点击了某个题目的回调
        onswitchtopic(e) {
            const index = e.detail;
            console.log(index)
            this.goItemByIndex(index);
            this.setData({
                topicBoxIsBg: false
            })
        },
        // 自动跳到下一题
        toNext() {
            // if (this.isLastTopic()) return;
            this.goItemByIndex(this.data.showIndex + 1)
        },
        // 将做过的题目的信息存起来，主要目的是因为一面翻过去了这题再返回回来的时候知道刚刚做题目选的什么
        addClassList({id, classList}) {
            const topic = this.data.dataList.find(topic => topic.id === id);
            topic && (topic.classList = classList);
        },
        // 修改题目数据
        changeSumObj(state) {
            switch (state) {
                case 'yes':
                    this.setData({
                        'sumObj.yes': this.data.sumObj.yes + 1,
                    })
                    break;
                case 'no':
                    this.setData({
                        'sumObj.no': this.data.sumObj.no + 1,
                    })
            }
        },
    }
})