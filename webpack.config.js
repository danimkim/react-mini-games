const path = require('path');
const webpack = require('webpack');

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
          // Presets are a collection of plugins
          presets: [
            [
              '@babel/preset-env', // Automatically support older browsers
              {
                targets: {
                  // target browser
                  // Support browsers with 5% or more market share in UK
                  // Support the latest 2 versions of Chrome
                  browsers: ['> 5% in GB', 'last 2 chrome versions'],
                },
                debug: true, // Mainly used for development
              },
            ],
            '@babel/preset-react',
          ],
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
