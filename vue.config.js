const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8081,
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  },
  // 在exports中添加，这里很关键，不配置不行
  transpileDependencies: ['element-ui'],
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
      echarts: 'echarts',
      axios: 'axios',
    },
  },
  chainWebpack: (config) => {
    config.entry.app = ['babel-polyfill', './src/main.js'];
    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(resolve('src'))
      .add(resolve('test'))
      .add(resolve('node_modules/webpack-dev-server/client'))
      .add(resolve('node_modules'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
      });
  },
  // css: {
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //     }
  //   }
  // }
};
