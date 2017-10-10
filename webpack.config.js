let webpack = require('webpack')
let path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
		rules: [
			{
				test: /\.jsx?/,
				include: SOURCE_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])				
			}
		]
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
		}),
		new ExtractTextPlugin({ // define where to save the file
			filename: 'css/[name].bundle.css',
			allChunks: true,
		})
	]
}

module.exports = config
