module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 2 version',
        'IE 11',
        '> 1% in RU'
      ]
    })
  ]
};
