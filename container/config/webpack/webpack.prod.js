const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.commom')
const packageJSON = require('../../package.json')

const prodConfig = {
    mode: 'production',
    devtool: 'source-map',
    externals: {
        react: 'React',
        axios: 'axios',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    output: {
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${process.env.PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`,
            },
            shared: packageJSON.dependencies
          }),
        new HtmlWebpackPlugin({
            template: './config/html/template.prod.html',
            favicon: './config/html/favicon.ico',
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig)
