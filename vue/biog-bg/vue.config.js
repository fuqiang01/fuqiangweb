module.exports = {
    devServer: {
        proxy: {
            "/*": {
                target:"http://127.0.0.1:12306"
            },
            // "/setFileToCos": {
            //     target:"http://127.0.0.1:12306"
            // }
        }
    }
}