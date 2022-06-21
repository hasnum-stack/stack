const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    main: './src/index.js',
    // b: './src/lib.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'hasnum',
    libraryTarget: 'umd2',
    // filename: 'js/[name].bundle.js',
    // chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // externals: {
  //   hasnum: 'hasnum',
  // },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
    // splitChunks: {
    //   // include all types of chunks
    //   chunks: 'all',
    //   name: false,

    //   // // 缓存分组
    //   cacheGroups: {
    //     // react
    //     react: {
    //       name: 'react', // chunk的名称，
    //       priority: 2, // 权限更高，优先抽离
    //       test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
    //       minSize: 0, // 大小限制
    //       minChunks: 1, // 最少复用多少次
    //     },
    //     //
    //     // 第三方模块
    //     vendor: {
    //       name: 'vendor', // chunk的名称，
    //       priority: 1, // 权限更高，优先抽离
    //       test: /node_modules/,
    //       minSize: 0, // 大小限制
    //       minChunks: 1, // 最少复用多少次
    //     },
    //     // 公共模块
    //     common: {
    //       name: 'commo1n', // chunk 名称
    //       priority: 0, // 优先级
    //       minSize: 0, // 大小限制
    //       minChunks: 1, // 最少复用多少次
    //     },
    //   },
    // },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    //  new BundleAnalyzerPlugin()
  ],
};
