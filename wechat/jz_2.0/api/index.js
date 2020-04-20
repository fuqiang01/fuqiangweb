import urls from "./urls";
// 自定义一个返回Promise对象的请求方法
const myRequest = config => {
    return new Promise( (resolve, reject) => {
        wx.request({
            ...config,
            url: urls.baseUrl + config.url,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err);
            }
        })
    })
}
// 登录
export function onLogin(code){
    return myRequest({
        url: urls.onLogin,
        data: {
            code
        }
    })
}
// 获取做错的题目
export function getWrongTopic(type, userId){
    return myRequest({
        url: urls.getWrongTopic,
        data: {
            type, // 当前是需要科目几的题目
            userId
        }
    })
}
// 获取指定数量的题目，目前后台写死了是请求前十条
export function getTopicForSome(type, userId){
    return myRequest({
        url: urls.getTopicForSome,
        data: {
            type, // 当前是需要科目几的题目
            userId
        }
    })
}
// 获取所有没做过的题目
export function getTopic(type, userId){
    return myRequest({
        url: urls.getTopic,
        data: {
            type, // 当前是需要科目几的题目
            userId
        }
    })
}
// 获取模拟考试的题目
export function getTestTopic(type){
    return myRequest({
        url: urls.getTestTopic,
        data: {
            type // 当前是需要科目几的题目
        }
    })
}
// 获取题目数量，包含当前科目的题目总数、做对的题目数和做错的题目数
export function getSum(type, userId){
    return myRequest({
        url: urls.getSum,
        data: {
            type, // 当前是需要科目几的题目
            userId
        }
    })
}
// 将某一题标记为做正确了
export function addYesId(type, userId, topicId){
    return myRequest({
        url: urls.addYesId,
        data: {
            type, // 当前是需要科目几的题目
            userId,
            id: topicId // 题目id
        }
    })
}
// 将某一题标记为做错了
export function addWrongId(type, userId, topicId){
    return myRequest({
        url: urls.addWrongId,
        data: {
            type, // 当前是需要科目几的题目
            userId,
            id: topicId // 题目id
        }
    })
}