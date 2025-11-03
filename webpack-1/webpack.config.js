//引入一个包
const path = require("path");

// webpack 配置
module.exports = {
  //入口文件
  entry: "./src/index.ts",
  //输出文件
  output: {
    // 输出文件的目录
    path: path.resolve(__dirname, "dist"),
    // 输出文件的文件名
    filename: "main.js",
  },
  //webpack打包时使用的模块
  module: {
    //指定要使用的loader
    rules: [
      {
        //test 匹配要使用的loader的文件类型
        test: /\.ts$/,
        //use 要使用的loader
        use: "ts-loader",
        //exclude 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
};
