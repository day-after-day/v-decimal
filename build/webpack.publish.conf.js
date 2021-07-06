const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const utils = require('./utils')


const webpackConfig = merge(baseWebpackConfig, {
    entry: {
        'v-decimal': utils.resolve('src/directives/decimal/index.js'),
    },
    output: {
        path: utils.resolve('lib'),          //打包后的文件存放的地方
        filename: '[name].min.js',    //打包后输出文件的文件名,因为要npm上传包时要指定对应的文件名所以没有选择带hash
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new CleanWebpackPlugin(utils.resolve('publish/**/*.*'), {
            root: utils.resolve("/"),
            verbose: true,
            dry: false
        })
    ]
});

module.exports = webpackConfig;
