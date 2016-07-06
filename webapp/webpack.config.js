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
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
