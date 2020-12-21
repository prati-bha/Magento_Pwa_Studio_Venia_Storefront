const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/hello-world.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};


config.plugins = [
    ...config.plugins,
    new DefinePlugin({
        /**
         * Make sure to add the same constants to
         * the globals object in jest.config.js.
         */
        POSSIBLE_TYPES: JSON.stringify(possibleTypes),
        STORE_NAME: JSON.stringify('Venia')
    }),
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './template.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    })
];
config.module.rules.push({
    test: /\.s[ca]ss$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]-[local]-[hash:base64:3]'
            }
        },
        'sass-loader'
    ]
});

config.module.rules.push({
    test: /\.less$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]-[local]-[hash:base64:3]'
            }
        },
        'less-loader'
    ]
});