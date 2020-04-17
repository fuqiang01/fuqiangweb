const Axios = require("axios");
const Cheerio = require("cheerio");
const IconvLite = require("iconv-lite");


Axios.get("http://www.jsyst.cn/mtc/km1/fx/q201/")
    .then(res => {
        console.log(Object.keys(res))
        // console.log(res.data)
        const $ = Cheerio.load(res.data);
        const text = $(".common_bor h1 a").text();
        console.log(text)
        const a = IconvLite.decode(text, "utf-8");
        console.log(a)
    })