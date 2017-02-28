const { resolve, join } = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/dist'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ],
};