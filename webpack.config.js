const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9999', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/App.js',
  ],

  output: {
    path: '/dist',
    // production usage
    // publicPath: 'http://mycdn.com/',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test:/\.html$/, loader: 'html-loader' },
      { test:/\.json$/, loader: "json" },
      { test: /\.sass$/, loaders: ["style", "css", "sass"] },
      // { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i, loader: 'url-loader?limit=10000' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: /node_modules/,
      },
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // postcss:[
  //   require('autoprefixer');
  // ],

  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'yoyo',
    //   filename: 'index.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],

  devtool: 'source-map',
  // devServer: {
  //   color: true,
  //   historyApiFallback: true,
  //   // inline: true,
  //   // hot: true,
  //   progress: true,
  //   contentBase: './'
  // }
}
