const exPath = require('path')

module.exports = {
  entry: exPath.resolve(__dirname, 'examples', 'src', 'index.tsx'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: exPath.resolve(__dirname, 'examples', 'dist'),
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: exPath.join(__dirname, 'examples', 'src'),
    },
    port: 3001,
  },
}
