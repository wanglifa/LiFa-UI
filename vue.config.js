const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                includePaths:  [path.join(__dirname,'styles')]
            },
        }
    },
    configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath: '../'
                            }
                        },
                        "css-loader"
                    ]
                }
            ]
        }
    }

}
