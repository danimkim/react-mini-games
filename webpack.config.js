const path = require('path');

module.exports = {
  name: 'react-mini-games',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Read files from entry
  entry: {
    app: ['./client'], // No need to write '.jsx' because extensions are configured in resolve.extensions
  },
  // Apply module rules
  module: {
    // Rules to apply to files
    rules: [
      {
        test: /\.jsx?/, // Apply rules to js and jsx files
        loader: 'babel-loader', // Apply babel-loader to make modern syntax compatible with older browsers
        // Babel options
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  // Output the bundled file
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
