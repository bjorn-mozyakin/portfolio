const projectNameWords = 'words';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const clearDestWords = new CleanWebpackPlugin('myportfolio.local/portfolio/words/**/*', {});

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
    name: 'words',
    context: __dirname + '/src/portfolio/' + projectNameWords,
    entry: {
      'js/main': './js/main',
      'styles/main': './styles/main.scss'
    },
    output: {
      path: __dirname + '/myportfolio.local/portfolio/' + projectNameWords,
      filename: './[name].js'
    },
    // mode: 'development',
    // watch: true,
    devtool: "source-map",
    plugins: [
      clearDestWords,
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
  };
};