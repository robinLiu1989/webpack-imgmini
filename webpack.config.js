const path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default


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
                            limit: 10000,
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

    // plugins: [
    //     // Make sure that the plugin is after any plugins that add images
    //     new ImageminPlugin({
    //         disable: process.env.NODE_ENV !== 'production',
    //         pngquant: {
    //             quality: '95-100'
    //         }
    //     })
    // ]




};