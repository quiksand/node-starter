const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const __src = path.join(__dirname, '/client/src');
const __dist = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${__src}/index.jsx`,
    output: {
        filename: 'main.js',
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
        new HtmlWebPackPlugin({
            template: "./client/src/index.html",
            filename: "index.html"
        }),
        new FaviconsWebpackPlugin('./client/src/assets/favicon.ico')
    ]
};