const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    web: "./client/web/app.js",
    tvos: "./client/tvos/app.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app-[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
