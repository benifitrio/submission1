const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname , 'dist'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
    }),
  ],
});
