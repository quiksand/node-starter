const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const __dist = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dist
    }
});