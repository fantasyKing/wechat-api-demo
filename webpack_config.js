'use strict';
/**
 * Created on 11/3/15.
 */
const webpack = require('webpack');
const path = require('path');

const DEBUG = true;

const GLOBALS = {
  'process.env.NODE_ENV': '"development"',
  __DEV__: DEBUG
};
// const WATCH = global.WATCH === undefined ? false : global.WATCH;

const BUILD_PATH = path.join(__dirname, 'build');

/**
 * webpack config for `src/server.js`
 */

const serverConfig = {
  watch: true,
  context: __dirname,
  devtool: 'source-map',
  entry: {
    'index.js': './src/app.js'
  },
  output: {
    publicPath: '/',
    sourcePrefix: '  ',
    path: BUILD_PATH,
    filename: '[name]',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: [
    function filter(context, request, cb) {
      const isExternal =
        request.match(/^[a-z][a-z\/\.\-0-9]*$/i);
      cb(null, Boolean(isExternal));
    }
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.txt$/,
      loader: 'raw-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=10000'
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/\.\/prod_.?/),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].map',
      include: ['app.js'],
      module: true,
      columns: true,
      lineToLine: true
    })
  ]
};


module.exports = serverConfig;
