module.exports = {
  context: __dirname + '/src/portfolio/chords/js',
  entry: {
    main: './main',
    tonalities: './tonalities',
    transpose: './transpose'
  },
  output: {
    path: __dirname + '/myportfolio.local/portfolio/chords/js',
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