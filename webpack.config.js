var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};