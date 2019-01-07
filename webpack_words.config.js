module.exports = {
  context: __dirname + '/src/portfolio/words/js',
  entry: {
    main: './main'
  },
  output: {
    path: __dirname + '/myportfolio.local/portfolio/words/js',
    filename: '[name].js'
  },
  mode: 'development',
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
      }
    ]
  }
};