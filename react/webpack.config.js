const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3003,
    historyApiFallback: true
  },
  output: {
    publicPath: "http://localhost:3003/",
    chunkFilename: "[id].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react",
      filename: "remoteEntry.js",
      remotes: {
        app1: 'script app1@http://localhost:3000/remoteEntry.js',
        app2: 'script app2@http://localhost:3002/remoteEntry.js',
        // home: "home@http://localhost:3002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] }
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js"
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public/"),
//     },
//     port: 3003,
//     hot: true,
//     // headers: {
//     //   "Access-Control-Allow-Origin": "*",
//     //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//     //   "Access-Control-Allow-Headers":
//     //     "X-Requested-With, content-type, Authorization",
//     // },
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new ModuleFederationPlugin({
//       name: "react",
//       filename: "remoteEntry.js",
//       remotes: {
//         app1: 'app1@http://localhost:3000/remoteEntry.js',
//         app2: 'app2@http://localhost:3002/remoteEntry.js',
//         // home: "home@http://localhost:3002/remoteEntry.js",
//       },
//       exposes: {},
//     }),
//   ]
// };