module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/main.js"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.js']
    },
};
