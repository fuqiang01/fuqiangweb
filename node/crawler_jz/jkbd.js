const cheerio = require("cheerio");
const axios = require('axios');
const iconv = require('iconv-lite');

axios({
    url: "http://www.fqla.cn",
    responseType: 'stream' //将数据转化为流返回，默认值是json
}).then(res => {
    let chunks = [];
    res.data.on('data', chunk => {
        chunks.push(chunk);
    });
    res.data.on('end', () => {
        //  Buffer 类用来创建一个专门存放二进制数据的缓存区。Buffer.concat: 缓冲区合并
        const buffer = Buffer.concat(chunks);
        // 通过iconv来进行转化编码格式
        const html = iconv.decode(buffer, 'gbk');
        // 使用cheerio插件获取$对象，然后就可以像使用jQuery一样来获取一些dom信息了
        const $ = cheerio.load(html);
    })
})

