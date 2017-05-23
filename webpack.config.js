var path = require("path");

module.exports = {
  devtool: "cheap-eval-source-map",
  devServer: {
    port: 9000,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        pathRewrite: {"^/" : ""}
      }
    }
  },
  entry: "./app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, use: [
        'style-loader', 'css-loader', 'sass-loader'
      ] }
    ]
  }
};
