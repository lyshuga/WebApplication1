﻿var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'app': './angularApp/app/main.ts'/*,
        'vendor': './app/vendor.ts',
        'polyfills': './app/polyfills.ts'*/
    },
    devtool: 'source-map',
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: 'js/[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: 'file-loader?name=assets/[name].[ext]',
            },

            // Load css files which are required in vendor.ts
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new CleanWebpackPlugin(
            [
                './wwwroot/js/',
                './wwwroot/css/',
                './wwwroot/assets/',
                './wwwroot/index.html'
            ]
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './angularApp/index.html',
            inject: 'body',
            filename: 'index.html'
        })

    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};