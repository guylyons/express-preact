// https://medium.com/modus-create-front-end-development/optimizing-webpack-production-build-for-react-es6-apps-a637e5692aea

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom", "react-router-dom"]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Express + React App",
      favicon: "./favicon.png",
      template: "./template.ejs"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new BabiliPlugin(),
    new webpack.HotModuleReplacementPlugin(
      {
        // Options...
      }
    )
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "cheap-eval-source-map", // development
  // devtool: "cheap-source-map", // production

  devServer: {
    hot: true,
    port: 9000,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        pathRewrite: { "^/": "" }
      }
    }
  },

  module: {
    rules: [
      { test: /\.js|.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss|.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

module.exports = config;
