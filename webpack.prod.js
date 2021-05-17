const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
      {
        test : /\.css$/,
        use : [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/templates/index.html'),
        filename: 'index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins : [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
});
