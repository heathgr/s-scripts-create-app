/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path')

module.exports = {
  entry: join(__dirname, 'src/app.tsx'),
  devServer: {
    contentBase: join(__dirname, 'static'),
  },
  devtool: 'eval-source-map',
  output: {
    filename: 'app.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
