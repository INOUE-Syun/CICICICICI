const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  resolve: {
    extensions: ['.html', '.js'],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
