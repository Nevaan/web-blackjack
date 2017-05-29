var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/scripts/WebBlackjack.ts',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.(svg|eot|ttf|woff|woff2)$/i, loader: "file-loader?name=/dist/assets/fonts/bree-seriff/[name].[ext]"},            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.html"
        }),
        new CopyWebpackPlugin([{
            from: "app/assets/",
            to: "assets/"
        }])
    ]
}