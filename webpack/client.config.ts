import * as path from 'path';
import { GenerateSW } from 'workbox-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import Dotenv from 'dotenv-webpack';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';

const config: webpack.Configuration = {
  target: 'web',
  entry: [
    IS_DEV && 'react-hot-loader/patch',
    IS_DEV && 'webpack-hot-middleware/client',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'index'),
  ].filter(Boolean) as unknown as webpack.Entry,
  module: {
    rules: [
      {
        test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    !IS_DEV &&
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 40 * 1024 * 1024,
      }),
  ].filter(Boolean),
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
  mode: IS_DEV ? 'development' : 'production',
  experiments: {
    asset: true,
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

export default config;
