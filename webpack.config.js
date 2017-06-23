const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Express + React App",
      favicon: "./favicon.png",
      template: "index-template.ejs"
    })
  ],
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
  module: {
    rules: [
      { test: /\.js|.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { 
        test: /\.scss|.sass$/, use: 
        [
          "style-loader", "css-loader", "sass-loader"
        ] 
      },
      { 
        test: /\.css$/, use: 
        [
          "style-loader", "css-loader"
        ] 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  }
};
