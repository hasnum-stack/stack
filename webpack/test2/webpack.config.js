const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const __directory = [
    /**
     * 索引:0
     * 关于Object.defineProperty的例子
     *
     */
    {
        entry: './src/definePropertyExample/index.js',
        html: 'src/definePropertyExample/public/index.html',
    },
    /**
     * 索引:1
     * 关于双向绑定
     *
     */

    {
        entry: './src/v-model/index.js',
        html: 'src/v-model/public/index.html',
    },
];

/**
 * 切换应用
 *
 */
const __position = __directory[1];

module.exports = {
    mode: 'development',

    entry: __position['entry'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash:8].js',
    },
    // devServer: {
    //     contentBase: './src',
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, __position['html']),
        }),
    ],
};
