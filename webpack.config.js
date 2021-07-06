const webpack = require("webpack")

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash:8].js"
    },
    module: {
        rules:[
            {
                test: /(\.js|\.jsx)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    devServer: {
        // contentBase: "./dist",//默认webpack-dev-server会为根文件夹提供本地服务器;如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        inline: true,
        port: 8484,
        hot: true
    },
    plugins: [
        new webpack.BannerPlugin("个人插件，欢迎使用")
    ]
};
