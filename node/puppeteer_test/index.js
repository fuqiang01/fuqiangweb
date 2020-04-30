const puppeteer = require('puppeteer');
const axios = require("axios");

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.jiakaobaodian.com/sign/');
//     // 获取下一页按钮，并且点击一下，这时候回调装到第二张
//     await page.$eval(".icon-right", el => el.click());
//     // 因为目前为第二页所以需要向前走一页，回到第一页
//     await page.$eval(".icon-left", el => el.click());
//     // 开启循环
//     let num = 0;
//     while (num < 10) {
//         await delay(10)
//         const imgUrl = await page.$eval(".com-image-show .dialog-box .img-bg", el => el.style.backgroundImage);
//         const title = await page.$eval(".com-image-show .dialog-box .title", el => el.innerText);
//         const explain = await page.$eval(".com-image-show .dialog-box .desc", el => el.innerText);
//         console.log("title:", title)
//         console.log("imgUrl:", imgUrl)
//         console.log("explain:", explain)
//         await addMark({
//             name: title,
//             imgUrl,
//             type: "交通标志",
//             explain,
//             signsType: "禁令标志"
//         })
//         num++;
//         await page.$eval(".icon-right", el => el.click());
//     }
//     await browser.close();
// })();

function delay(number) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, number);
    })
}

function addMark(body) {
    // return axios("http://localhost:19525/mark/add", {
    //     method: "POST",
    //     body: body
    // })
    return axios({
        url: "http://localhost:19525/mark/add",
        method: "post",
        body
    })
}
addMark({
    name: "title",
    imgUrl: "url.jpg",
    type: "交通标志",
    explain: "explain",
    signsType: "禁令标志"
}).then(res => console.log(res))