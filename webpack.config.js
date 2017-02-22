module.exports = {
    entry: './public/appjs.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['','.js', '.jsx']
    }
};