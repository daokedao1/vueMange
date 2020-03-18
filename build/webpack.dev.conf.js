const merge = require("webpack-merge");
const webpack = require("webpack");
// const path = require("path");
const baseConfig = require("./webpack.base.conf");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const colors = require("colors");
const config = require("./config");
// webpack构建方法
// const utils = require("./utils");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: Object.assign({
    open: true,
    hot: true,
    port: 9000,
    // useLocalIp: true,
    clientLogLevel: "warning",
    overlay: {
      warnings: true,
      errors: true
    },
    host: "localhost",
    // host: "0.0.0.0",
    // 显示 webpack 构建进度
    progress: true,
    quiet: true
  }),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.styl(us)$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [
          `你的应用程序正在运行 ${colors.cyan(
            "http://localhost:" + (config.devServer.port || 9000)
          )}`
        ]
        // notes: [
        //   `或者使用IP运行 ${colors.cyan(
        //     "http://" +
        //       utils.getIPAdress() +
        //       ":" +
        //       (config.devServer.port || 9000)
        //   )}`
        // ]
      },
      onErrors: severity => {
        if (severity !== "error") {
          return;
        }
      }
    })
  ]
});
