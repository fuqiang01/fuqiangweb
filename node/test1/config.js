const fs = require('fs');
let globalConfig = {};
const conf = fs.readFileSync('./server.conf');
let confArr = conf.toString().split('\n');

confArr.forEach( ele => { //将配置文件拆分成对象
    let arr = ele.split('=');
    globalConfig[ arr[0].trim() ] = arr[1].trim();
})

if ( globalConfig.static_file_type ) { // 将配置文件里的规定的静态文件结尾,拆分成数组
    globalConfig.static_file_type = globalConfig.static_file_type.split('|');
    globalConfig.static_file_type.forEach( ele => {
        ele.trim();
    })
} else {
    throw new Error("配置文件异常:缺少static_file_type");
}


module.exports = globalConfig; // 导出拆分好的对象