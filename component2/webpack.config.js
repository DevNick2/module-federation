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
    port: 3002
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
    publicPath: "http://localhost:3002/",
    path: path.join(__dirname, "public"),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "app2",
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/components/Footer'
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}