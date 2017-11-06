const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
  plugins: [new UglifyJSPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
