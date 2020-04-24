const cheerio = require("cheerio");
const axios = require('axios');
const iconv = require('iconv-lite');
const {
    downloadImg
} = require("./util");

async function crawl(url) {

    const res = await axios({
        url,
        responseType: 'stream' //将数据转化为流返回
    })

    return new Promise(resolve => {
        let chunks = [];
        res.data.on('data', chunk => {
            chunks.push(chunk);
        });
        res.data.on('end', () => {
            const buffer = Buffer.concat(chunks);
            //通过iconv来进行转化。
            const html = iconv.decode(buffer, 'gbk');
            const $ = cheerio.load(html);

            const title = $('.vehiclesIn3 h1').text();
            const comment = $('.vehiclesIn3 hr').prev("p")[0].children[1].data;
            const answer = $('.vehiclesIn3 p font').text().replace("A", 1).replace("B", 2).replace("C", 3).replace("D", 4);

            let options = [];
            $('.vehiclesIn3 p').each((index, ele) => {
                if ($(ele)[0].children[0] !== undefined && $(ele)[0].children[0].type === "text") {
                    const text = $(ele)[0].children[0].data.slice(2);
                    options.push(text);
                }
            })
            const imgSrc = $('.vehiclesIn3 p img').attr("src");
            const fileName = imgSrc ? downloadImg(imgSrc) : null;
            let testType = options.length === 2 ? "judge" : "radio";
            resolve({
                subject: 1,
                title,
                answer: [answer],
                topicExplain: comment,
                imgUrl: fileName,
                options,
                testType,
                lnowledgeType: "mark"
            })
        })
    })
}

function uploadTopic(topicData) {
    return axios.post("http://localhost:3000/topic/create", topicData)
}

let num = 1;
let url = `http://www.jsyst.cn/mtc/km1/fx/q${num}/`;

function root(url) {
    crawl(url)
        .then(res => {
            return uploadTopic(res)
        }, err => {
            console.log("页面出错，url地址：", url)
        })
        .then(res => {
            console.log(`第${num}题，上传${res.data.msg}!`);
            if(res.data.msg === "失败") console.log("错误信息：", res.data.data);
            num ++;
            const newUrl = `http://www.jsyst.cn/mtc/km1/fx/q${num}/`
            root(newUrl);
        }, err => {
            console.log("上传出错，错误信息：", err)
        })
}

root(url);