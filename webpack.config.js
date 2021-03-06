var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: [
	  './index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
	  new webpack.optimize.OccurenceOrderPlugin(),
	  new webpack.HotModuleReplacementPlugin(),
	  new webpack.NoErrorsPlugin()
	],
    module: {
    	loaders: [
    	  {
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: __dirname
     	  }
    	]
    }
}

var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
	module.exports.resolve = { alias: { 'redux': reduxSrc} }

	module.exports.module.loaders.push({
		test: /\.js$/,
		loaders: [ 'babel'],
		include: reduxSrc
	})
}
