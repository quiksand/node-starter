const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const __src = path.join(__dirname, '/client/src');
const __dist = path.join(__dirname, '/client/dist');


module.exports = {
    entry: {
        app: path.join(__src,  'index.jsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: __dist
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/src/index.html",
            filename: "index.html",
            title: 'Production'
        }),
        // new FaviconsWebpackPlugin('./client/src/assets/favicon.ico'),
        new CleanWebpackPlugin()
    ]
};