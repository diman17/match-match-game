const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path');

module.exports = {
  mode: process.env.MODE,

  devtool: "inline-source-map",

  entry: './src/scripts/main.js',

  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          (process.env.MODE === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash][ext][query]'
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/icons/logo.svg'), to: "assets/icons" },
        { from: path.resolve(__dirname, 'src/assets/images/about-game/'), to: "assets/images/about-game" },
        { from: path.resolve(__dirname, 'src/assets/images/animals/'), to: "assets/images/animals" },
        { from: path.resolve(__dirname, 'src/assets/images/cars/'), to: "assets/images/cars" },
        { from: path.resolve(__dirname, 'src/assets/images/no-avatar.png'), to: "assets/images" },
        { from: path.resolve(__dirname, 'src/assets/images/loader.gif'), to: "assets/images" },
      ],
    })
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    host: 'local-ipv4',
    port: 8080,
  },
};