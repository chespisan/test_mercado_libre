const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/i,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
    hot: true
  }
}