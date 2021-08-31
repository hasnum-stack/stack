const path = require('path');
console.log(__dirname);
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: {
                    version: 3,
                  },
                  targets: {
                    ie: 9,
                  },
                },
              ],
            ],
            // plugins: [
            //   [
            //     '@babel/plugin-transform-runtime',
            //     {
            //       //corejs3,支持提案
            //       corejs: { version: 3, proposals: true },
            //     },
            //   ],
            // ],
          },
        },
      },
    ],
  },
  mode: 'production',
  // mode: 'development',
};
