const { resolve, join } = require('path');
const webpack = require("webpack");

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { 
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  devtool: "inline-source-map",
  // target: "web",
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    // historyApiFallback: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ],
};