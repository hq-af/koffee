const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/content_script/index.ts'),
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/manifest.json'),
      to: path.resolve(__dirname, 'dist/manifest.json'),
    }])
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  output: {
    filename: 'script.js',  
    path: path.resolve(__dirname, 'dist')
  }
};
