const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    {loader: 'less-loader'}
                    ]
            },{
                test: /\.(jpg|jpeg|png|gif)$/,
                use: ['url-loader?limit=1000&name=./img/[name].[ext]']
            },{
                test: /\.html$/,
                use: [{
                    loader : 'html-loader',
                    options : {
                        attrs : ['img:src']
                    }
                }]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin( {
          filename: "index.html",
          template: "./src/index.html"
      }),
    new MiniCssExtractPlugin( {
        filename : '[name].css'
    })
    ],
    mode: 'production'
    // mode: 'development',
    // devServer: {
    //     port: 9090,
    //     contentBase: 'dist',
    //     hot: true
    // }
}