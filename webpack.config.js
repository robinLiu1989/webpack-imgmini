const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

    devtool: 'cheap-module-source-map',

    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'img/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',// 压缩图片
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            }
            ]
    },

    node: {
        fs: 'empty'
    },

    plugins: [

        new CleanWebpackPlugin(['dist','img']),

    ],


};