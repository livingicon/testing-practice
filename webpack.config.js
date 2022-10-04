const path = require('path');

module.exports = {
  entry: './scripts/capitalize.js', // or whatever the name of the main js file is
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
