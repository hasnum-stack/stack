// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  // entry: {
  //   main: './src/index.js',
  //   // utils: './src/utils/index.js',
  // },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]__[contenthash:8].js',
    // chunkFilename: '[name]__[contenthash:8].js',
    // chunkFilename: pathData => {
    //   // console.log('🚀 ~ pathData', pathData.chunk);
    //   return pathData.chunk.name === 'main' ? '[name].js' : 'chunks/[name].js';
    // },
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      // name: (module, chunks, cacheGroupKey) => {
      //   // console.log('🚀 ~ cacheGroupKey', cacheGroupKey);
      //   // console.log('🚀 ~ chunks', chunks.name);
      //   // console.log('🚀 ~ module', module);
      //   return cacheGroupKey;
      // },
      // name: () => {
      //   return 'vendor~other';
      // },
      cacheGroups: {
        // react: {
        //   test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        //   name: 'vendor~react-awesome',
        //   chunks: 'all',
        // },
        vendor: {
          // minChunks: 1,
          name: 'vendors',
          test({ resource }) {
            return /[\\/]node_modules[\\/]/.test(resource);
          },
          priority: 10,
        },
      },
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
