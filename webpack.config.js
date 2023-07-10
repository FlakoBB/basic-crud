const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './javascript/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  devServer: {
    open: true,
    port: 3000,
    compress: true
  }
}
