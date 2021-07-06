const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const utils = require('./utils')


const webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new webpack.BannerPlugin('欢迎使用 --Mr.Gao'),
        new HtmlWebpackPlugin({
            template:utils.resolve('index.html'),       // 模板html未知
            filename: "index.html",               //在目标文件中，生成的html文件名
            chunks: ['manifest', 'vendor', 'main'],
            hash: true,
        }),
        new CleanWebpackPlugin(utils.resolve('dist/*.*'), {
            root: utils.resolve("/"),
            verbose: true,
            dry: false
        })
    ]
});

module.exports = webpackConfig;
