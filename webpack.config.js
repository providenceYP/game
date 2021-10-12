const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const commonConfig = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  experiments: {
    asset: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: './www/index.html' })],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'www'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};

const developmentConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv(),
  ]
};

const productionConfig = {
  mode: 'production',
  plugins: [new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 40 * 1024 * 1024
  }),
  new Dotenv(),
],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  }
};


module.exports = {
  plugins: [
    new Dotenv()
  ]
};

module.exports = (env, args) => {
  switch(args.mode) {
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      return merge(commonConfig, developmentConfig);
  }
};
