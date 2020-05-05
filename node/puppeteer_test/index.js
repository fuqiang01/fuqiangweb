// 爬取驾考宝典的各种标志的
const puppeteer = require('puppeteer');
const axios = require("axios");

// 下别这些都是爬取数据上传都数据库中所需要的一些东西
const url = "https://www.jiakaobaodian.com/sign/keypad/";
const count = 6;
const type = "功能按键";

(async () => {
    // 创建一个浏览器实例 browser
    const browser = await puppeteer.launch();
    // 创建一个页面实例
    const page = await browser.newPage();
    // 打开指定页面
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
    // 关闭浏览器
    await browser.close();
})();

// 延迟函数
function delay(number) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, number);
    })
}

// 上传到数据库的后台接口
function addMark(body) {
    return axios.post("http://localhost:19525/mark/add",body)
}