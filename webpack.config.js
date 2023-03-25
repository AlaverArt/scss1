const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ],
    devServer: {  // configuration for webpack-dev-server
        static: {
            directory: __dirname + '/dist',
        },  //source of static assets
        port: 8080, // port to run dev-server
    }
};