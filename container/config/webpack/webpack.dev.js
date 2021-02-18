const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.commom')
const packageJSON = require('../../package.json')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared: packageJSON.dependencies
          }),
        new HtmlWebpackPlugin({
            template: './config/html/template.dev.html',
            favicon: './config/html/favicon.ico'        })
    ]
}

module.exports = merge(commonConfig, devConfig)
