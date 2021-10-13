import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';

const config: webpack.Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server/app'),
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        loader: 'null-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
  mode: IS_DEV ? 'development' : 'production',
  devtool: 'source-map',
  optimization: { nodeEnv: false },
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
};

export default config;
