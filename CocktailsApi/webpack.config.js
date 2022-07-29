const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3018/',

    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3018,
    static: {
      directory: path.join(__dirname, './dist'),
    },
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: ['image/png', 'image/jpg', 'image/gif'],
              encoding: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
