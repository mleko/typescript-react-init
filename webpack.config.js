let webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

let config = {
    resolve: {
        // .js is required for react imports.
        // .tsx is for our app entry point.
        // .ts is optional, in case you will be importing any regular ts files.
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: "tslint"
            }
        ],
        loaders: [{
            // Set up ts-loader for .ts/.tsx files and exclude any imports from node_modules.
            test: /\.tsx?$/,
            loaders: isProduction ? ['ts-loader'] : ['react-hot', 'ts-loader'],
            exclude: /node_modules/
        }]
    },
    entry: [
        // Set index.tsx as application entry point.
        './index.tsx'
    ],
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ]
};

if (!isProduction) {
    config.entry.unshift(
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    );
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
