const path = require('path');
const autoprefixer = require('autoprefixer');

const srcPath = path.join(__dirname, '../src');

module.exports = {
    mode: 'development',
    entry: [
        path.join(srcPath, 'index.jsx')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss/,
                loader: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: srcPath
    }
};
