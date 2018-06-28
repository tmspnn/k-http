'use strict';

module.exports = {
  entry: __dirname + '/src/k-http.ts',
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'k-http.min.js',
    library: 'kHttp',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devtool: '#nosources-source-map'
};
