const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: ['./src/index.ts'],
    callApi: ['./src/callApi.ts'],
    insectPro: ['./src/insectPro.ts'],
    offLoading: ['./src/offLoading.ts']
  },
  module: {
    rules: [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
};
