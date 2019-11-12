// components/infoitem/cmp.js
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
        topicObj: {
            id: 1,
            titleType: "多选题",
            titleText: "这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目这是题目",
            options: [
                "这是选项一这是选项一这是选项一这是选项一这是选项一",
                "这是选项二",
                "这是选项三",
                "这是选项四"
            ],
            answer: [1,2],
            explain: '详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释详细解释'
        },
        optionT: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G']
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
