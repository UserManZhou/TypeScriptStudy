//引入一个包
const path = require('path')
//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { env } = require('process')

// webpack 配置
module.exports = {
  // 注意：设置为production模式会自动启用代码压缩
  // 可以根据需要切换开发和生产模式
  mode: 'production',
  //入口文件
  entry: './src/index.ts',
  //输出文件
  output: {
    // 输出文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 输出文件的文件名
    filename: 'main.js',
    //配置打包的环境变量
    environment: {
      // 配置箭头函数
      arrowFunction: false,
    },
  },
  //webpack打包时使用的模块
  module: {
    //指定要使用的loader
    rules: [
      {
        //test 匹配要使用的loader的文件类型
        test: /\.ts$/,
        //use 要使用的loader
        use: [
          //  配置babel-loader
          {
            loader: 'babel-loader',
            // options 配置babel-loader的参数
            options: {
              // presets 配置预定义的环境
              presets: [
                // 指定要使用的环境
                [
                  '@babel/preset-env',
                  {
                    // 配置要兼容的浏览器版本
                    targets: {
                      // 谷歌浏览器版本60及以上
                      chrome: '60',
                      // ie浏览器版本11及以上
                      ie: '11',
                    },
                    //  配置useBuiltIns参数为usage
                    useBuiltIns: 'usage',
                    //  配置corejs参数为3
                    corejs: 3,
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        //exclude 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  //插件
  plugins: [
    //  配置html-webpack-plugin插件
    new HtmlWebpackPlugin({
      //  配置html-webpack-plugin插件的参数
      //title: "这是一个webpack-1项目",
      //template 指定要使用的html模板文件
      template: './src/index.html',
    }),
    //  配置clean-webpack-plugin插件
    new CleanWebpackPlugin(),
  ],
  //用来设置模块的解析规则
  resolve: {
    // 配置文件扩展名
    extensions: ['.ts', '.js'],
  },
  // 配置优化选项
  optimization: {
    // 最小化JS代码
    minimize: true,
    // 配置最小化工具
    minimizer: [
      // 使用webpack内置的TerserPlugin（webpack 5默认包含）
      // 不需要额外安装terser-webpack-plugin
      // 如果需要自定义配置，可以引入TerserPlugin并配置
    ],
  },
}

// 注意事项：
// 1. 生产环境（mode: "production"）会自动启用代码压缩
// 2. 开发环境（mode: "development"）可以通过minimize: true手动启用压缩
// 3. 如果需要更详细的压缩配置，可以安装terser-webpack-plugin并进行配置
