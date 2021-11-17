const {merge} = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const NpmInstallPlugin = require('npm-install-webpack-plugin')

const TARGET = process.env.npm_lifecylce_event
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const common = {
    mode: 'development',
    devServer: {
        // contentBase: path.join(__dirname, 'build'),
        static: {
            directory: PATHS.build,
        },
        proxy:{
            "/api":{
                target: "http://localhost:8080"
            }
        },
        headers: {
        "Access-Control-Allow-Origin": "*"
        },
        compress:true,
        hot: true,
        port:4000,
        historyApiFallback:true,
        // publicPath: '/',
    },
    entry: {
        app: PATHS.app,
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
                include: PATHS.app
            }
        ]
    }
}

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
    })
}
if (TARGET === 'build') {
    module.exports = merge(common, {})
}