const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils')

const webpackConfig = merge(baseWebpackConfig, {
    devServer: {
        // contentBase: "./dist",//默认webpack-dev-server会为根文件夹提供本地服务器;如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        // historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port:8484,//设置默认监听端口，如果省略，默认为”8080“
        hot:true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:utils.resolve('index.html'),       // 模板html未知
            hash: true,
        }),
        new webpack.HotModuleReplacementPlugin()        //热加载插件
    ]
})

module.exports = webpackConfig
