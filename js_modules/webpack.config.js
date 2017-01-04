// Needed to create absolute path for output
const path = require('path');

// Minimum config required for webpack
const config = {
  // Where to start
  entry: './src/index.js',
  // Where to put output file
  output: {
    // Inside folder build
    path: path.resolve(__dirname, 'build'),
    // Name file bundle.js
    filename: 'bundle.js'
  }
};
// Export it
module.exports = config;
