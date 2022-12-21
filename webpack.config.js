const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map',
  entry: {
    ui: './ui-src/ui.tsx', // The entry point for your UI code
    code: './plugin-src/code.ts', // The entry point for your plugin code
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: './ui-src/ui.html',
      filename: 'ui.html',
      chunks: ['ui'],
      cache: false,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});