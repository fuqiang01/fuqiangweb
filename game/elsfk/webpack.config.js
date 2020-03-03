const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('./dist'),
        filename: 'script/bandle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}