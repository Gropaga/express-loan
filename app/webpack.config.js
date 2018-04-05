const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../public/js');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
    entry: {
        thinkingInReact: APP_DIR + '/thinkingInReact/index.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss?$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    mode: 'development'
};

module.exports = config;
