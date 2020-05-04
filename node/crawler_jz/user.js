const axios = require("axios");

// 创建新用户
function addUser(userId) {
    return axios.post("http://localhost:19525/user/add", {
        userId
    })
}

// 添加对题数组
function addRightTopic(userId, topicIds, subject) {
    return axios.post("http://localhost:19525/user/addRightTopic", {
        userId,
        topicIds,
        subject
    })
}

// 添加错题
function addWrongTopic(userId, topicIds, subject) {
    return axios.post("http://localhost:19525/user/addWrongTopic", {
        userId,
        topicIds,
        subject
    })
}

// 获取老数据库中的用户信息
function getUser() {
    return axios.get("https://www.fqiang.co/getAllUser");
}

// 处理科目一的题目id，因为新的数据库中题目id跟旧的数据库中的不一样
function handleTypeOneId(idStr) {
    if (idStr === "") return "";
    let idArr = idStr.split(";").filter(id => id !== "");
    idArr = idArr.map(id => {
        if (id <= 28) {
            return parseInt(id) - 18;
        } else {
            return parseInt(id) - 21;
        }
    })
    idArr = removeDuplicate(idArr);
    return idArr.join(";");
}

// 处理科目四的题目id
function handleTypeFourId(idStr) {
    if (idStr === "") return "";
    let idArr = idStr.split(";").filter(id => id !== "");
    idArr = idArr.map(id => {
        if (id <= 250) {
            return parseInt(id) + 400;
        } else {
            return parseInt(id) + 397;
        }
    })
    idArr = removeDuplicate(idArr);
    return idArr.join(";");
}

// 数组去重
function removeDuplicate(arr) {
    const set = new Set(arr);
    return [...set];
}

// 主执行函数
async function root() {
    const result = await getUser();
    const allUser = result.data;
    for (let i = 0; i < allUser.length; i++) {
        const {
            id,
            user_id: userId,
            type_one_yes_id: typeOneRightIds,
            type_one_wrong_id: typeOneWrongIds,
            type_four_yes_id: typeFourRightIds,
            type_four_wrong_id: typeFourWrongIds
        } = allUser[i];
        const newTypeOneRightIds = handleTypeOneId(typeOneRightIds);
        const newTypeOneWrongIds = handleTypeOneId(typeOneWrongIds);
        const newTypeFourRightIds = handleTypeFourId(typeFourRightIds);
        const newTypeFourWrongIds = handleTypeFourId(typeFourWrongIds);
        await addUser(userId);
        await addRightTopic(userId, newTypeOneRightIds, 1);
        await addWrongTopic(userId, newTypeOneWrongIds, 1);
        await addRightTopic(userId, newTypeFourRightIds, 4);
        await addWrongTopic(userId, newTypeFourWrongIds, 4);
        console.log(`id为${id}的用户上传完成，一共上传成功${i + 1}位用户`);
    }
    console.log("=========================================================")
    console.log("全部上传完成！")
    console.log("=========================================================")
}
root();