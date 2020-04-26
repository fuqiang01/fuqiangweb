const axios = require("axios");
const fs = require("fs");


function uploadTopic(topicData) {
    return axios.post("http://localhost:3000/topic/create", topicData)
}

async function downloadImg(imgSrc, num) {
    const result = await axios({
        url: `https://www.fqiang.co/getImg?src=${imgSrc}`,
        responseType: 'stream'
    })
    const writer = fs.createWriteStream(`./img/${num}.jpg`)
    result.data.pipe(writer)
    return `${num}.jpg`;
}


async function root() {
    const result = await axios("https://www.fqiang.co/getTopicAll?type=1");
    for (let i = 0; i < result.data.length; i++) {
        const ele = result.data[i];
        let imgUrl = "";
        let testType = "";
        if (ele.imgSrc) {
            imgUrl = await downloadImg(ele.imgSrc, i + 1)
        }
        switch (ele.titleType) {
            case "单选题":
                testType = 'radio';
                break;
            case "多选题":
                testType = "check";
                break;
            case "判断题":
                testType = "judge";
        }
        const topicData = {
            subject: 1,
            title: ele.titleText,
            answer: ele.answer,
            topicExplain: ele.explain,
            imgUrl,
            options: ele.options,
            testType,
            lnowledgeType: "mark"
        }
        await uploadTopic(topicData)
            .then(res => {
                console.log(`第${i + 1}题，上传${res.data.msg}!`);
                if (res.data.msg === "失败") console.log("错误信息：", res.data.data);
            }, err => {
                console.log("上传出错，错误信息：", err)
            })
    }

}

root();