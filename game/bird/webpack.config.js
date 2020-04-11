const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve("./dist"),
        filename: "script/bandle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //打包后的文件名,[ext]代表后缀名
                            name: 'img/[name].[ext]',
                            //限制图片大小,下边的意思是<=10kb就进行base64编码
                            limit: 10000,
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|wav)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //打包后的文件名,[ext]代表后缀名
                            name: 'audio/[name].[ext]',
                            //限制图片大小,下边的意思是<=10kb就进行base64编码
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}