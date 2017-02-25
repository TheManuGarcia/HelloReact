module.exports = {
    entry: './public/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        // specify our components path
        alias: {
            Greeter: 'public/components/Greeter.jsx',
            GreeterMessage: 'public/components/GreeterMessage.jsx',
            GreeterForm: 'public/components/GreeterForm.jsx'
        },
        extensions: ['','.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(no_modules|bower_components)/
            }
        ]
    }
};