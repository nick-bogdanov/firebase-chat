module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/main.js"
    },
    watch: true,
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
};
