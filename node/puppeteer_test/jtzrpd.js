const cheerio = require("cheerio");
const axios = require('axios');

axios("https://www.jiakaobaodian.com/sign/accident/")
.then(res => {
    const $ = cheerio.load(res.data);
    console.log($('.left-link').text())
    $('.shigu-ul-container li').each(async (index, ele) => {
        const imgSrc = $(ele).find(".imgw img").attr("src");
        const imgName = imgSrc.split("\/").pop()
        const title = $(ele).find(".ellipsis").text();
        const explain = $(ele).find("b").text();
        await addMark({
            name: title,
            imgUrl: imgName,
            type: "责任认定",
            explain
        })
        console.log(`第${index + 1}个上传完成`)
    })
})

function addMark(body) {
    return axios.post("http://localhost:19525/mark/add",body)
}