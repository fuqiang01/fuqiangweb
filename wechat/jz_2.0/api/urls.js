export default {
    baseUrl: "http://localhost:3000",
    onLogin: "/user/onLogin", // 登录
    updateNameAndPhoto: "/user/updateNameAndPhoto", // 更新用户的名字和头像地址
    addWrongTopic: "/user/addWrongTopic", // 上传错题的id或者id数组(数组用 ; 来分割)
    addRightTopic: "/user/addRightTopic", // 上传对题的id或者id数组
    getRightWrongNotDoneTopicNumber: "/user/getRightWrongNotDoneTopicNumber", // 获得对题、错题、未做题的数量
    getWrongTopic: "/user/getWrongTopic", // 获得做错的题目集合
    getNotDoneTopic: "/user/getNotDoneTopic", // 获得未做的题目集合，如果穿了isSome为true的话就只返回查到的前五题
    getAllResult: "/user/getAllResult", // 返回该用户的所有考试成绩
    getBestResult: "/user/getBestResult", // 返回该用户的最好考试成绩 
    getMessagesByUser: "/user/getMessages", // 返回改用户的所有留言
    getTestTopic: "/topic/getTestTopic", // 返回某一科目的测试题
    addResult: "/result/add", // 添加一条成绩
    getRankingList: "/result/getRankingList", // 获取某一科目的成绩排行前一百名
    addMessage: "/message/add", // 添加一条留言
    replyMessage: "/message/reply", // 回复留言，当然只有超级用户可以回复
    deleteMessage: "/message/delete", // 删除留言
    getAllMessage: "/message/getAll", // 返回所有留言
    getMessageByPage: "/message/getMessageByPage", // 分页获得留言
    getNotReadMessage: "/message/getNotRead", // 获得未读的留言
    addFileToCos: "/message/addFileToCos", // 上传文件到cos上
}