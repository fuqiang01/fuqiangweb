const cheerio = require("cheerio");
const axios = require('axios');
const iconv = require('iconv-lite');
const fs = require("fs");
const {
    downloadImg
} = require("./util");

const url = 'http://km1.jsyst.cn/fx/q201/';
function crawl(url) {
    return axios({
            url,
            responseType: 'stream' //将数据转化为流返回
        })
        .then(res => new Promise((resolve, reject) => {
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
                const answer = $('.vehiclesIn3 p font').text();
                const comment = $('.vehiclesIn3 hr').prev("p")[0].children[1].data;
                let options = [];
                $('.vehiclesIn3 p').each((index, ele) => {
                    if ($(ele)[0].children[0] !== undefined && $(ele)[0].children[0].type === "text") {
                        const text = $(ele)[0].children[0].data;
                        options.push(text);
                    }
                })
                const imgSrc = $('.vehiclesIn3 p img').attr("src");
                const fileName = imgSrc ? downloadImg(imgSrc) : null;
                resolve({
                    title,
                    answer,
                    comment,
                    img: fileName,
                    options
                })
            })
        }))
}