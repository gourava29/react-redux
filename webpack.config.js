var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  	plugins: [
		  new webpack.HotModuleReplacementPlugin()
	],
  	entry: [
  		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  		'webpack/hot/only-dev-server',
  		APP_DIR + '/index'
	],
  	output: {
    	path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/static/'
  	},
  	module : {
    	loaders : [
      		{
		        test : /\.js$/,
		        include : APP_DIR,
		        loaders: ['react-hot', 'babel']
      		}
    	]
  	}
};

module.exports = config;