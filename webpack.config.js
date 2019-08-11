var path = require('path'); 

module.exports = {
    entry: ['@babel/polyfill', './src/js/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/public'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
               test:/\.(s*)css$/,
               use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
};