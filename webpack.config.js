const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    // 入口
    entry:path.join(__dirname,"src","index.js"),
    // 输出
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                // 文件范围
                include:path.join(__dirname,"src"),
                exclude:/node_modules/                
            }
        ]
    },

    // 添加插件的步骤
    // 1.安装插件包
    // 2.在webpack.config.js中添加pulgins选项

    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"src","index.html"),
            filename:"index.html"
        })
    ],

    // webpack-dev-server 配置项
    devServer:{
        port:8000,
        static:path.join(__dirname,"dist")
    }
}