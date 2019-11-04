const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
};
