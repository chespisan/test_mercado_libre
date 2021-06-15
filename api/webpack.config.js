const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  name: 'express-server',
  entry: './src/index.js',
  target: 'node',
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      controllers: path.resolve(__dirname, 'src/controllers/'),
      services: path.resolve(__dirname, 'src/services'),
      routes: path.resolve(__dirname, 'src/routes'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
}