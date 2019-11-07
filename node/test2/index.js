const express = require('express');
const multer = require('multer');
const url = require('url');
const fs = require('fs');
const app = new express();
const cookie = require("cookie-parser");

const upload = multer({dest: "./file/"});
app.use( cookie() );
app.use( express.static('./page/'));

app.post("/upload", upload.single("file"), function ( request, response) {
    // console.log(request.file);
    // console.log(request.body);
    console.log(request.cookies);
    response.end( request.file.path );
});

app.get('/getPic', function ( request, response) {
    let query = url.parse(request.url, true).query.path;
    console.log(query)
    try{
        let data = fs.readFileSync(query);
        response.end(data);
    }catch{
        console.log('没有');
    }
})

app.listen(12306)