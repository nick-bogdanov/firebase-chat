
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
};
