const express = require('express');
const url = require('url');
const req = require('request');

const app = new express();
app.use( express.static('./page/'));

app.get('/chat', function (request, response) {
    let query = url.parse( request.url, true ).query;

    let data = {
        "data":{
            "content": [
                {
                    "data": query.text
                }
            ],
            "userInfo": {
                "uniqueId": "uniqueId"
            }
        },
        "key":"ed474dae62********67050faea1788",
        "timestamp": new Date().getTime()
    };

    req( {
        url: 'http://api.turingos.cn/turingos/api/v2',
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }, function ( err, res, body) {

    })


    response.writeHead(200);
    response.end(query.text);
})

app.listen(12306, function () {
    console.log('服务已启动');
})