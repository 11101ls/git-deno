// 引入包
const path=require('path')
// 引入html插件 自动生成index.html
const HTMLWebpackPlugin=require("html-webpack-plugin")
// webpack 配置信息
module.exports={
  // 指定入口
    entry:"./src/index.ts",
    // 指定打包路径
    output:{
      path:path.resolve(__dirname,"dist"),
      // 打包后的文件 
      filename:"bundle.js",
      clean:true
    },
    // 指定打包模块
    module:{
      // 指定loader规则
      rules:[{
        // 规则生效文件
        test:/\.ts$/,
        use: [ {
          // 配置babel
          loader:"babel-loader",
          options:{
            // 设置预定义环境
            presets:[
              [
                // 指定环境插件
                "@babel/preset-env",
                // 配置信息
                {
                  // targets:{
                  //   // 指定浏览器版本
                  //   "chrome":"",
                  // },
                  "corejs":"3",
                  // 使用corejs的方式 usage 按需加载
                  "useBuiltIns":"usage"
                }
              ]
            ]
          }
        },"ts-loader" ],
        exclude:/node_modules/
      },{
        // 指定scss文件处理,
        test:/\.scss$/,
        use:[
          "style-loader",
          "css-loader", 
          // 引入postcss
          // {
          //   loader:"postcss-loader",
          //   options:{
          //     postcssOptions:{
          //       plugins:[
          //         []
          //       ]
          //     }
          //   }
          // },
          "sass-loader"
        ]

      }]
    },
  mode: 'development',

  // 配置webpack 插件
  plugins:[
    // 配置自动生成index.html
    new HTMLWebpackPlugin({
        // title:"TS"
        // 使用模版
        template:'./src/index.html'
    }),
  ],
  // 配置可导入导出模块的文件名
  resolve:{
    extensions:[".ts",".js"]
  }
}