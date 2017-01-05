// Needed to create absolute path for output
const path = require('path');
// Import plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Basic config for webpack and loaders
const config = {
  // Where to start
  entry: './src/index.js',
  // Where to put output file
  output: {
    // Folder for build output
    path: path.resolve(__dirname, 'build'),
    // output filename
    filename: 'bundle.js',
    // Needed for url-loader to create url for big image
    publicPath: 'build/'
  },
  module: {
    // 'rules' replace webpack1 'loaders'
    rules: [
      // Babel loader
      {
        // designate loader
        use: 'babel-loader',
        // Filter for files to process
        test: /\.js$/
      },
      // CSS loader
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      // Img loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          // Use object in order to include options
            // Url loader to create correct paths
          {
            loader: 'url-loader',
            // Set image size limit
            options: { limit: 40000 }
          },
          // Image loader/handler
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
// Export it
module.exports = config;
