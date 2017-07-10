const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./js/app.js",
  output: { filename: "js/out.js" },
  watch: true,
  module: {
    rules: [
      {
      test: /\.js$/, exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: ['es2015'] }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', {loader: 'sass-loader'}]})
			},
			{
				test:/\.(png|jpe?g|gif)$/,
				exclude:/node_modules/,
				loader: 'url-loader?limit=1024&name=../images/[name].[ext]'
			}
    ]
  },
  plugins: [new ExtractTextPlugin("css/out.css")],
}
