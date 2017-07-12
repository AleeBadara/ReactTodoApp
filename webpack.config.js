var webpack = require('webpack');

let webpackConfig = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules', './app/components', './app/api', './app/actions', './app/reducers', './app/store'],
        alias: {
            ApplicationStyles: "app/styles/app.scss"
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};

const ENV = process.env.NODE_ENV;
if (ENV === 'PROD') {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }));
    console.log(`Environnement d'éxécution : ${process.env.NODE_ENV}`);
} else {
    console.log('Environnement d\'éxécution : hors PROD');
}

module.exports = webpackConfig;

