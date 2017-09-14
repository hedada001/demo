var webpack = require("webpack")
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    port: 8888,
    historyApiFallback: true,
    stats: 'minimal',  // 输入精简信息
    overlay: true, // 将错误显示在html之上
    proxy: {
      '/api': {
        target: 'http://api.dataoke.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''},
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};