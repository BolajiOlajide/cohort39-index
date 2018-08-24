const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");


const nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: {
    filename: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname,'./_build/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // env plugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        NAME: JSON.stringify('Bolaji')
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        exclude: /\/node_modules/
      })
    ]
  },
  devServer: {
    compress: true,
    port: 3000,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}
