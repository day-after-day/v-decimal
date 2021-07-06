const config = require('../config')
const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:  utils.resolve('src/main.js'), // 等价格path.resolve(__dirname, "../src/main.js")
    output: {
        path: utils.resolve('dist'),          //打包后的文件存放的地方
        filename: '[name].[hash:8].js'    //打包后输出文件的文件名,因为要npm上传包时要指定对应的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                        plugins: ["babel-plugin-transform-runtime"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            // 处理图片资源
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options: {
                    // 8 * 1024表示 图片大小小于8KB，就会被base64处理
                    // 优点: 减少请求数量(减轻服务器压力)
                    // 缺点: 图片体积会更大(文件请求熟读更慢)
                    limit:  8 * 1024,
                    // 问题:因为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
                    // 解析时会出问题:[object Module]
                    // 解决:关闭url-loader的es6模块化，使用commonjs解析
                    esModule:false,
                    // 给图片进行重命名
                    // [hash:10]取图片的hash的前10位
                    // [text]取文件原来扩展名
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
