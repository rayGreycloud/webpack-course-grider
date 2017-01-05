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
    // Inside folder build
    path: path.resolve(__dirname, 'build'),
    // Name file bundle.js
    filename: 'bundle.js',
    // Needed for url-loader to create url for big image
    publicPath: 'build/'
  },

  module: {
    // Replaces webpack1 'loaders'
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
          {
            loader: 'url-loader',
            // Set image size limit
            options: { limit: 40000 }
          },
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
