import urls from "./urls";
// 自定义一个返回Promise对象的请求方法
const myRequest = config => {
    return new Promise((resolve, reject) => {
        wx.request({
            ...config,
            url: urls.baseUrl + config.url,
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err);
            }
        })
    })
}

// 登录
export function onLogin(code) {
    return myRequest({
        url: urls.onLogin,
        method: "POST",
        data: {
            code
        }
    })
}

// 更新用户名字和头像
export function updateNameAndPhoto(userId, name, photoUrl) {
    return myRequest({
        url: urls.updateNameAndPhoto,
        method: "POST",
        data: {
            userId,
            name,
            photoUrl
        }
    })
}

// 上传错题id
export function addWrongTopic(subject, userId, topicIds){
    return myRequest({
        url: urls.addWrongTopic,
        method: "POST",
        data: {
            subject,
            userId,
            topicIds
        }
    })
}

// 上传对题id
export function addRightTopic(subject, userId, topicIds){
    return myRequest({
        url: urls.addRightTopic,
        method: "POST",
        data: {
            subject,
            userId,
            topicIds
        }
    })
}

// 获得对题、错题、未做题的数量
export function getRightWrongNotDoneTopicNumber(subject, userId){
    return myRequest({
        url: urls.getRightWrongNotDoneTopicNumber,
        data: {
            subject,
            userId
        }
    })
}

// 获取做错的题目
export function getWrongTopic(subject, userId){
    return myRequest({
        url: urls.getWrongTopic,
        data: {
            subject,
            userId
        }
    })
}

// 获取没做过的题目，isSome为0代表获取所有，为1代表获取前几个进行懒加载
export function getNotDoneTopic(subject, userId, isSome = false) {
    // 将布尔值转换成1或0，方便后端处理
    isSome = isSome ? 1 : 0; 
    return myRequest({
        url: urls.getNotDoneTopic,
        data: {
            subject, 
            userId,
            isSome
        }
    })
}

// 获取所有成绩
export function getAllResult(subject, userId){
    return myRequest({
        url: urls.getAllResult,
        data: {
            subject,
            userId
        }
    })
}

// 获取最好的成绩
export function getBestResult(subject, userId){
    return myRequest({
        url: urls.getBestResult,
        data: {
            subject,
            userId
        }
    })
}

// 获取该用户的所有留言
export function getMessagesByUser(userId){
    return myRequest({
        url: urls.getMessagesByUser,
        data: {
            userId
        }
    })
}

// 获取模拟考试的题目
export function getTestTopic(subject) {
    return myRequest({
        url: urls.getTestTopic,
        data: {
            subject
        }
    })
}

// 上传一条成绩
export function addResult(subject, userId, score, timeConsuming){
    return myRequest({
        url: urls.addResult,
        method: "POST",
        data: {
            subject,
            userId,
            score,
            timeConsuming
        }
    })
}

// 获取排行榜数据
export function getRankingList(subject){
    return myRequest({
        url: urls.getRankingList,
        data: {
            subject
        }
    })
}

// 上传一条留言
export function addMessage(userId, imgUrls, content){
    return myRequest({
        url: urls.addMessage,
        method: "POST",
        data: {
            userId,
            imgUrls,
            content
        }
    })
}

// 超级用户回复留言
export function replyMessage(userId, text, messageId){
    return myRequest({
        url: urls.replyMessage,
        method: "POST",
        data:{
            userId,
            text,
            messageId
        }
    })
}

// 超级用户删除留言
export function deleteMessage(userId, messageId){
    return myRequest({
        url: urls.deleteMessage,
        method: "POST",
        data: {
            userId,
            messageId
        }
    })
}

// 获取所有留言
export function getAllMessage(){
    return myRequest({
        url: urls.getAllMessage
    })
}

// 分页获取留言
export function getMessageByPage(pageNumber, pageCapacity){
    return myRequest({
        url: urls.getMessageByPage,
        data: {
            pageNumber,
            pageCapacity
        }
    })
}

// 获得未读的留言
export function getNotReadMessage(){
    return myRequest({
        url: urls.getNotReadMessage
    })
}

// 上传文件到cos上，上传文件的key为 file
export function addFileToCos(fromData){
    return myRequest({
        url: urls.addFileToCos,
        method: "POST",
        data: fromData
    })
}