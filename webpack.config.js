var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    'docs.js': [
      './docs/index.jsx',
      // 'webpack/hot/only-dev-server',
      // 'webpack-dev-server/client?http://localhost:8000'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: ['babel-preset-react-app', 'babel-preset-env'],
          compact: true,
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' + 'includePaths[]=' +
        (path.resolve(__dirname, './node_modules'))
      },
      { test: /\.md$/, loader: 'html!markdown' }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 version'] })],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};
