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
            {
                test: /\.less$/, loader: 'style!css!less'
            }
        ]
    }
};
