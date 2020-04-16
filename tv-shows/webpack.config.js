var path = require('path')

module.exports = {
    // entry: './src/index.js',
    mode : 'development',
    watch : true,
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module : {
        rules : [
            {
                test : /\.s[ac]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test : /\.css$/i,
                use : [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    resolve : {
        extensions : ['.js', '.scss', '.css']
    }
}

//npm install webpack-dev-server -g