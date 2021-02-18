const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.commom')
const packageJSON = require('../../package.json')

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
              './MarketingApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies
          }),
        new HtmlWebpackPlugin({
            template: './config/html/template.dev.html',
            favicon: './config/html/favicon.ico'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)
