const words_config = require('./webpack_words.config.js');

const projectNameChords = 'chords';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const clearDestChords = new CleanWebpackPlugin('myportfolio.local/portfolio/chords/**/*', {});

const CopyWebpackPlugin = require('copy-webpack-plugin');
const copyFiles = new CopyWebpackPlugin([
  { from: '*.html', to: '[path][name].html' },
  { from: '**/*.php', to: '[path][name].php' },
  { from: 'img/**/*', to: '[path][name].[ext]' }
]);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExcludeAssetsPlugin = require("webpack-exclude-assets-plugin");
const extractCSS = new MiniCssExtractPlugin({ filename: "/[name].css" });


const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  excludeAssets: /styles.*\.js/
});
const excludePlugin = new HtmlWebpackExcludeAssetsPlugin();

module.exports = function() {
  return {
    name: 'chords',
    context: __dirname + '/src/portfolio/' + projectNameChords,
    entry: {
      'js/main': './js/main',
      'js/tonalities': './js/tonalities',
      'js/transpose': './js/transpose',
      'styles/main': './styles/main.scss',
      'styles/tonalities': './styles/tonalities.scss',
      'styles/transpose': './styles/transpose.scss'
      // main: './js/main',
      // tonalities: './js/tonalities',
      // transpose: './js/transpose'
    },
    output: {
      path: __dirname + '/myportfolio.local/portfolio/' + projectNameChords,
      filename: './[name].js'
    },
    // mode: 'development',
    // watch: true,
    devtool: "source-map",
    plugins: [
      clearDestChords,
      copyFiles,
      extractCSS
      // htmlPlugin,
      // excludePlugin
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
};