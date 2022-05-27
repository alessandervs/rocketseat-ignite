const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src', 'index.tsx'),
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx'],

    },
    devServer:{
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

       isDevelopment &&  new ReactRefreshPlugin(),

    ].filter(Boolean),

    module:{
        rules:[
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //integração entre webpack e babel
                    options:{
                        plugins:[
                            isDevelopment && require.resolve("react-refresh/babel")
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', 'sass-loader' ]
            }
        ]
    }
}