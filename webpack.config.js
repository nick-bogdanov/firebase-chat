
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/main.js",
        publicPath: `./assets`
    },
    watch: true,
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
};
