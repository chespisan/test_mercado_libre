const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT

module.exports = {
  name: 'express-server',
  entry: './src/index.js',
  target: 'node',
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
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
  }
}