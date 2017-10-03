let webpack = require('webpack')
let path = require('path')

let SOURCE_DIR = path.resolve(__dirname, 'src')
let BUILD_DIR = path.resolve(__dirname, 'build')

let vendorLibs = ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-logger', 'redux-thunk']

let config = {
	entry: {
		app: SOURCE_DIR + '/entry.js',
		vendor: vendorLibs
	},

	output: {
		path: BUILD_DIR,
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/build/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SOURCE_DIR,
				loader: 'babel-loader'
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		port: 9000,
		open: true
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: 2
		})
	]
}

module.exports = config
