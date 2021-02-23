const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: '[name].[fullhash].js',
    },
    resolve: {
        extensions: ['.js', 'jsx'],
        alias: {
          '@': path.join(__dirname, '../../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}