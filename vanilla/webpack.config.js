const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ["./src/index.js", "./src/styles.css"],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    publicPath: "http://localhost:5000/",
    path: path.join(__dirname, "public"),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "vanilla",
      remotes: {
        app1: 'app1@http://localhost:3000/app1/remoteEntry.js',
        // app2: 'app2@http://localhost:3000/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}