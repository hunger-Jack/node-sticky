let webpack = require('webpack')
let path = require('path')

module.exports = {
    entry: path.join(__dirname,'/js/app/index.js'),
    output: {
        path: path.join(__dirname,'../public'),
        filename: 'js/index.js'
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname,"js/lib/jquery-3.3.1.min.js"),
            module: path.join(__dirname,"js/module"),
            less: path.join(__dirname,"less")
        }
    },
    module:{
        rules: [{
            test: /\.less$/,
            use: ["style-loader","css-loader","less-loader"]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
}