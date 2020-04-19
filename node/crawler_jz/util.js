const axios = require('axios');
const fs = require("fs");

function downloadImg(src){
    const fileName = src.split("\/").pop();
    axios({
        url: src,
        responseType: 'stream'
    })
    .then(resp => {
        const writer = fs.createWriteStream("./img/" + fileName);
        resp.data.pipe(writer);
    })
    return fileName;
}



module.exports = {
    downloadImg
}