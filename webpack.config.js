const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = Object.assign(
  {
    entry: './lib/index.js',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    output: {
      filename: './dist/index.js',
      libraryTarget: 'umd',
    },
  },
  isProd && {
    devtool: 'cheap-module-source-map',
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
        },
      }),
    ],
  },
);
