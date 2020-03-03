const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('./dist'),
        filename: 'script/bandle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve('./src') //此resolve是外面定义的一个函数，用于生成绝对路径
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }]
            },
            {
                test : /\.(jpg|jpeg|png|gif)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options : {
                            //打包后的文件名,[ext]代表后缀名
                            name : '[name].[ext]',
                            //限制图片大小,下边的意思是<=10kb就进行base64编码
                            limit : 10000,
                            //会把大于10kb大小的图片打包到dist文件夹下的img文件夹内
                            outputPath : 'img'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}