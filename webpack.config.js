var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bug-report.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    globalObject: 'this',
    library: 'BugReport',
    libraryTarget: 'umd',
  },
  watch: true,
  devServer: {
    compress: true,
    open: true,
    publicPath: '/dist/',
    stats: {
      errors: true,
      warnings: true,
    },
    clientLogLevel: 'none',
    port: 9001,
    proxy: {
      "/api": "http://localhost:9002"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
    ],
  },
};
