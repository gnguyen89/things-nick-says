var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }},
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {test: /\.(png|jpg|ico)$/, loader: 'file-loader?name=img/[name].[ext]'}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
