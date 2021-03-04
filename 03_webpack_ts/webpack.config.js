// 引入 path 包
const path = require('path');
// 引入 html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入 clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // mode: "development",

  // entry 指定入口文件
  entry: "./src/index.ts",

  // output 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名
    filename: 'bundle.js',

    // 告诉 webpack 不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  // 指定 webpack 打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // use 要使用的 loader
        use: [
          // 配置 babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置 babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定 corejs 版本
                    "corejs": "3",
                    // 使用 corejs 的方式, "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  // 配置 webpack 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的title"
      template: "./src/index.html"
    }),
  ],

  // resolve 用来设置引入模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
