const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/ts/index.tsx',
    callApi: './src/ts/callApi.tsx',
    offLoading: './src/ts/offLoading.tsx',
    

  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public','dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: path.resolve(__dirname, 'public', 'index.html'),
      
    }),
    
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  } 
};
