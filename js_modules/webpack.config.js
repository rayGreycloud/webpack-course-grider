// Needed to create absolute path for output
const path = require('path');

// Basic config for webpack and loaders
const config = {
  // Where to start
  entry: './src/index.js',
  // Where to put output file
  output: {
    // Inside folder build
    path: path.resolve(__dirname, 'build'),
    // Name file bundle.js
    filename: 'bundle.js'
  },

  module: {
    // Replaces webpack 1 'loaders'
    rules: [
      // first loader
      {
        // designate loader
        use: 'babel-loader',
        // Filter for files to process
        test: /\.js$/

      }
    ]
  }
};
// Export it
module.exports = config;
