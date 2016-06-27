var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  // publicPath: '/public/',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(9999, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Webpack with React HMR is listen at http://localhost:9999/');
});
