const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    productionSourceMap: false, // 打包不创建来源地图
    configureWebpack: { // webpack扩展配置
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.css$/, // 匹配规则
                threshold: 1024, // 到多大的临界值开始压缩，这里设置的大于1k就压缩
                deleteOriginalAssets: false // 是否删除原文件
            })
        ],
        // 使用外部扩展的包，左边是你在使用的时候导入的名称，右侧是cdn源码中放到全局中的名称
        // externals: { 
        //     'vue': 'Vue',
        //     'vuex': 'Vuex',
        //     'vue-router': 'VueRouter',
        //     'ant-design-vue': 'antd',
        //     'axios': 'axios',
        //     'highlight.js': 'hljs',
        //     'vue-quill-editor': 'VueQuillEditor',
        //     'quill': 'Quill',
        //     '@antv/g2': 'G2',
        //     '@antv/data-set': 'DataSet'
        // }
    }
    // devServer: {
    //     proxy: {
    //         "/*": {
    //             target:"http://127.0.0.1:19524"
    //         }
    //     }
    // }
}