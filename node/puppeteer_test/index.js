// 爬取驾考宝典的各种标志的
const puppeteer = require('puppeteer');
const axios = require("axios");
// const url = "https://www.jiakaobaodian.com/sign/keypad/";
const count = 6;
const type = "功能按键";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // 获取下一页按钮，并且点击一下，这时候回调装到第二张
    await page.$eval(".icon-right", el => el.click());
    // 因为目前为第二页所以需要向前走一页，回到第一页
    await page.$eval(".icon-left", el => el.click());
    // 开启循环
    let num = 0;
    while (num < count) {
        // 延迟10毫秒，要不然加载太快获取的数据有问题
        await delay(10)
        const imgUrl = await page.$eval(".com-image-show .dialog-box .img-bg", el => el.style.backgroundImage);
        const title = await page.$eval(".com-image-show .dialog-box .title", el => el.innerText);
        const explain = await page.$eval(".com-image-show .dialog-box .desc", el => el.innerText);
        const urlStr = imgUrl.slice(5).slice(0, -2);
        const imgName = urlStr.split("\/").pop();
        await addMark({
            name: title,
            imgUrl: imgName,
            type,
            explain
        })
        console.log(`第${num + 1}条上传成功`)
        num++;
        // 点击下一条
        await page.$eval(".icon-right", el => el.click());
    }
    await browser.close();
})();

function delay(number) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, number);
    })
}

function addMark(body) {
    return axios.post("http://localhost:19525/mark/add",body)
}