module.exports = {
  context: __dirname + '/src/portfolio/chords/js',
  entry: './scripts',
  output: {
    path: __dirname + '/myportfolio.local/portfolio/chords/js',
    filename: 'scripts.js'
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