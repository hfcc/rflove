module.exports = {
    entry: './webapp/src/index.js',
    output: {
        path: './webapp/bin',
        filename: 'index.bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [['antd', {'style': true}]]
                }
            },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.(png|jpg|)$/, loader: 'url-loader?limit=200000' }
        ]
    }
};
