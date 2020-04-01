var path = require('path')

module.exports = {
    entry: './src/index.js',
    mode : 'development',
    watch : true,
    module : {
        rules : [
            {
                test : /\.s[ac]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
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
        extensions : ['.js', '.scss']
    }
}

//npm install webpack-dev-server -g