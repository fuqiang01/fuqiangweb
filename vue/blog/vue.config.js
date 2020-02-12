const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    productionSourceMap: false, // 不生成.map文件
    configureWebpack: () => {
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    },
    // devServer: {
    //     proxy: {
    //         "/*": {
    //             target: "http://127.0.0.1:19524"
    //         }
    //     }
    // }
}