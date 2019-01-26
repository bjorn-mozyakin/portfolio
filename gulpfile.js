// Add plugins
var gulp = require('gulp');

// Build
var pug = require('gulp-pug');
// var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
// const webpack = require('webpack');
const webpackStream = require('webpack-stream');


var spritesmith = require('gulp.spritesmith');
var svgSprite = require('gulp-svg-sprite');

var browserSync = require('browser-sync').create();

// Deploy

// Common
var concat = require('gulp-concat');
var del = require('del');
var gulpIf = require('gulp-if');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var combine = require('stream-combiner2').obj;

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// Default task
gulp.task('default', function(){
  console.log('It is alive!!!');
});



// ===========================
// PORTFOLIO - CHORDS
// ===========================

// Clean
gulp.task('chords_clean', function(){
  return del('./myportfolio.local/portfolio/chords');
});

// HTML
gulp.task('chords_html', function(){
  return gulp.src('./src/portfolio/chords/**/*.html')
    // .pipe(concat('index.html'))
    // .pipe(newer('./myportfolio.local/portfolio/chords'))
    // .pipe(gulpIf(!isDevelopment, combine(rev(), revReplace({
    //   manifest: gulp.src('manifest/css.json')
    // }))))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

gulp.task('chords_pug', function(){
  return gulp.src('./src/portfolio/chords/**/*.pug', {base: 'src'})
    .pipe(pug())
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

// Images
gulp.task('chords_img', function(){
  return gulp.src(['./src/portfolio/chords/img/**/*', '!./src/portfolio/chords/img/sprite_png/**/*', '!./src/portfolio/chords/img/sprite_png', '!./src/portfolio/chords/img/sprite_svg/**/*', '!./src/portfolio/chords/img/sprite_svg'])
    // .pipe(newer('./myportfolio.local/portfolio/chords/img'))
    // .pipe(imagemin({
    //   progressive: true,
    // }))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords/img'));
});

// Sprite
gulp.task('chords_sprite_png', function () {
  var spriteData = gulp.src('./src/portfolio/chords/img/sprite_png/**/*.{png,jpg,jpeg}')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      // imgPath: '../img/sprite.png',
      cssName: 'sprite.css',
      cssFormat: 'css',
      algorithm: 'top-down',
      padding: 0,
      algorithmOpts: {sort: false}
    }));

  spriteData.img
    .pipe(gulp.dest('./src/portfolio/chords/img'));

  spriteData.css
    .pipe(gulp.dest('./src/portfolio/chords/img/sprite_png'));

  return spriteData;
  // return spriteData.pipe(gulp.dest('./src/portfolio/chords/'));
});



var config = {
  shape : {
    spacing : {              // Spacing related options
      padding : [0,0,0,0]    // Padding around all shapes
    }
  },
  mode : {
    css : {                   // Activate the «css» mode
      layout: 'vertical',
      render      : {
        css     : true        // Activate CSS output (with default options)
      },
      dest : './',
      sprite: '../sprite.svg',
      bust: false,
      dimensions: {
        extra: true
      }
    }
  }
};

gulp.task('chords_sprite_svg', function () {
  var spriteData = gulp.src('./src/portfolio/chords/img/sprite_svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/portfolio/chords/img/sprite_svg'));

  return spriteData;
});

// Styles
gulp.task('chords_sass', function(){
  return gulp.src('./src/portfolio/chords/**/*.scss')
    .on('data', function(file) {
      console.log(file);
    })
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 11'))
    .pipe(gulpIf(!isDevelopment, combine(
      cssnano(),
      rename({suffix: '.min'}) ))
    )
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

gulp.task('chords_css', function(){
  return gulp.src('./src/portfolio/chords/**/*.css')
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});
// gulp.task('sass', function(){
//   return gulp.src('./src/portfolio/chords/**/*.scss')
//     // .pipe(newer('./myportfolio.local/portfolio/chords/css'))
//     // .pipe(gulpIf(isDevelopment, sourcemaps.init()))
//     .pipe(sass())
//     // .pipe(gulpIf(isDevelopment, sourcemaps.write()))
//     // .pipe(sass({
//     //   includePaths: require('node-normalize-scss').includePaths
//     // }))
//     .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
//     // .pipe(gulpIf(!isDevelopment, combine(
//     //   cssnano(),
//     //   rename({suffix: '.min'}),
//     //   rev() ))
//     // )
//     .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
//     // .pipe(gulpIf(!isDevelopment, combine(
//     //   rev.manifest('css.json'),
//     //   gulp.dest('manifest') ))
//     // );
// });

// Scripts
gulp.task('chords_scripts', function(){
  return gulp.src('./src/portfolio/chords/js/**/*.js')
    // .pipe(newer('./myportfolio.local/portfolio/chords/js'))
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
    // .pipe(concat('scripts.js'))
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    .pipe(webpackStream( require('./webpack.config.js') ))
    .pipe(gulpIf(!isDevelopment, combine(
      uglify(),
      rename({suffix: '.min'})
    )))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords/js'));
});

// gulp.task('babel', function(){
//   return gulp.src('./src/portfolio/chords/js/**/*.js')
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(gulp.dest('./myportfolio.local/portfolio/chords/js'))
// );


// complicated tasks
gulp.task('chords_build', function(){
  runSequence('chords_clean', 'chords_html', 'chords_sass', 'chords_scripts', 'chords_img');
  // runSequence('clean', 'html', 'assets', 'sass', 'scripts');
});

gulp.task('chords_watch', function() {
  // gulp.watch('./src/portfolio/chords/**/*.pug', ['pug']);
  gulp.watch('./src/portfolio/chords/**/*.html', ['chords_html']);
  // gulp.watch('./src/portfolio/chords/img/strite_png/**/*.{png,jpg,jpeg}', ['sprite_png']);
  gulp.watch('./src/portfolio/chords/img/**/*.*', ['chords_img']);
  gulp.watch('./src/portfolio/chords/styles/**/*.scss', ['chords_sass']);
  // gulp.watch('./src/portfolio/chords/styles/**/*.css', ['css']);
  gulp.watch('./src/portfolio/chords/js/**/*.js', ['chords_scripts']);
});

gulp.task('chords_serve', function(){
  browserSync.init({
    server: './myportfolio.local/portfolio/chords'
  });

  browserSync.watch('./myportfolio.local/portfolio/chords/**/*.*').on('change', browserSync.reload);
});

gulp.task('chords_devloh', function(){
  runSequence('chords_build', 'chords_watch');
});

gulp.task('chords_dev', function(){
  runSequence('chords_build', ['chords_watch', 'chords_serve']);
});



// ===========================
// PORTFOLIO - WORDS
// ===========================

// Clean
gulp.task('words_clean', function(){
  return del('./myportfolio.local/portfolio/words');
});

// HTML
gulp.task('words_html', function(){
  return gulp.src('./src/portfolio/words/**/*.html')
    .pipe(gulp.dest('./myportfolio.local/portfolio/words'));
});

gulp.task('words_pug', function(){
  return gulp.src('./src/portfolio/words/**/*.pug', {base: 'src'})
    .pipe(pug())
    .pipe(gulp.dest('./myportfolio.local/portfolio/words'));
});

// Images
gulp.task('words_img', function(){
  return gulp.src(['./src/portfolio/words/img/**/*', '!./src/portfolio/words/img/sprite_png/**/*', '!./src/portfolio/words/img/sprite_png', '!./src/portfolio/words/img/sprite_svg/**/*', '!./src/portfolio/words/img/sprite_svg'])
    .pipe(gulp.dest('./myportfolio.local/portfolio/words/img'));
});

// Sprite
gulp.task('words_sprite_png', function () {
  var spriteData = gulp.src('./src/portfolio/words/img/sprite_png/**/*.{png,jpg,jpeg}')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      cssFormat: 'css',
      algorithm: 'top-down',
      padding: 0,
      algorithmOpts: {sort: false}
    }));

  spriteData.img
    .pipe(gulp.dest('./src/portfolio/words/img'));

  spriteData.css
    .pipe(gulp.dest('./src/portfolio/words/img/sprite_png'));

  return spriteData;
});

var config = {
  shape : {
    spacing : {              // Spacing related options
      padding : [0,0,0,0]    // Padding around all shapes
    }
  },
  mode : {
    css : {                   // Activate the «css» mode
      layout: 'vertical',
      render      : {
        css     : true        // Activate CSS output (with default options)
      },
      dest : './',
      sprite: '../sprite.svg',
      bust: false,
      dimensions: {
        extra: true
      }
    }
  }
};

gulp.task('words_sprite_svg', function () {
  var spriteData = gulp.src('./src/portfolio/words/img/sprite_svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/portfolio/words/img/sprite_svg'));

  return spriteData;
});

// Styles
gulp.task('words_sass', function(){
  return gulp.src('./src/portfolio/words/**/*.scss')
    .on('data', function(file) {
      console.log(file);
    })
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 11'))
    .pipe(gulpIf(!isDevelopment, combine(
      cssnano(),
      rename({suffix: '.min'}) ))
    )
    .pipe(gulp.dest('./myportfolio.local/portfolio/words'));
});

gulp.task('words_css', function(){
  return gulp.src('./src/portfolio/words/**/*.css')
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
    .pipe(gulp.dest('./myportfolio.local/portfolio/words'));
});

// Scripts
gulp.task('words_scripts', function(){
  return gulp.src('./src/portfolio/words/js/**/*.js')
    .pipe(webpackStream( require('./webpack.config.js') ))
    .pipe(gulpIf(!isDevelopment, combine(
      uglify(),
      rename({suffix: '.min'})
    )))
    .pipe(gulp.dest('./myportfolio.local/portfolio/words/js'));
});

// complicated tasks
gulp.task('words_build', function(){
  runSequence('words_clean', 'words_html', 'words_sass', 'words_scripts', 'words_img');
  // runSequence('clean', 'html', 'assets', 'sass', 'scripts');
});

gulp.task('words_watch', function() {
  // gulp.watch('./src/portfolio/words/**/*.pug', ['pug']);
  gulp.watch('./src/portfolio/words/**/*.html', ['words_html']);
  // gulp.watch('./src/portfolio/words/img/strite_png/**/*.{png,jpg,jpeg}', ['sprite_png']);
  gulp.watch('./src/portfolio/words/img/**/*.*', ['words_img']);
  gulp.watch('./src/portfolio/words/styles/**/*.scss', ['words_sass']);
  // gulp.watch('./src/portfolio/words/styles/**/*.css', ['css']);
  gulp.watch('./src/portfolio/words/js/**/*.js', ['words_scripts']);
});

gulp.task('words_serve', function(){
  browserSync.init({
    server: './myportfolio.local/portfolio/words'
  });

  browserSync.watch('./myportfolio.local/portfolio/words/**/*.*').on('change', browserSync.reload);
});

gulp.task('words_devloh', function(){
  runSequence('words_build', 'words_watch');
});

gulp.task('words_dev', function(){
  runSequence('words_build', ['words_watch', 'words_serve']);
});


// ===========================
// PORTFOLIO - MAIN PAGE
// ===========================

// Clean
gulp.task('main_clean', function(){
  return del(['./myportfolio.local/**/*','!./myportfolio.local/{portfolio,portfolio/**/*}']);
});

// HTML
gulp.task('main_html', function(){
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./myportfolio.local'));
});

// PHP
gulp.task('main_php', function(){
  return gulp.src('./src/**/*.php')
    .pipe(gulp.dest('./myportfolio.local'));
});

// Fonts
gulp.task('main_fonts', function(){
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./myportfolio.local/fonts'));
});

// Media
gulp.task('main_media', function(){
  return gulp.src('./src/audio/**/*')
    .pipe(gulp.dest('./myportfolio.local/audio'));
});

// Images
gulp.task('main_img', function(){
  return gulp.src(['./src/img/**/*', '!./src/img/{icons_big,icons_big/**/*}'])
    .pipe(gulp.dest('./myportfolio.local/img'));
});

// Styles
gulp.task('main_sass', function(){
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 11'))
    .pipe(gulpIf(!isDevelopment, combine(
      cssnano()
      // rename({suffix: '.min'}) ))
    )))
    .pipe(gulp.dest('./myportfolio.local/css'));
});
//
// var pump = require('pump');
// pump([
//   gulp.src('./src/js/**/*.js'),
//   uglify({
//     compress: {drop_debugger: false}
//   }),
//   gulp.dest('./myportfolio.local/js')
// ], cb);

// Scripts
gulp.task('main_scripts', function(cb){
  return gulp.src('./src/js/**/*.js')
    .pipe(gulpIf(!isDevelopment, combine(
      uglify({
        compress: {drop_debugger: false}
      })
      // rename({suffix: '.min'})
    )))
    .pipe(gulp.dest('./myportfolio.local/js'));
});


// complicated tasks
gulp.task('main_build', function(){
  runSequence('main_clean', 'main_html', 'main_php', 'main_fonts', 'main_sass', 'main_img', 'main_media', 'main_scripts');
});

gulp.task('main_watch', function() {
  // gulp.watch('./src/portfolio/chords/**/*.pug', ['pug']);
  gulp.watch('./src/**/*.html', ['main_html']);
  gulp.watch('./src/**/*.php', ['main_php']);
  gulp.watch('./src/css/**/*.scss', ['main_sass']);
  gulp.watch('./src/img/**/*.*', ['main_img']);
  gulp.watch('./src/js/**/*.js', ['main_scripts']);
});

gulp.task('main_serve', function(){
  browserSync.init({
    server: './myportfolio.local'
  });

  browserSync.watch('./myportfolio.local/**/*.*').on('change', browserSync.reload);
});

gulp.task('main_dev', function(){
  runSequence('main_build', ['main_watch', 'main_serve']);
});

gulp.task('main_devloh', function(){
  runSequence('main_build', 'main_watch');
});
// ===========================
// PORTFOLIO - OTHER
// ===========================

// Clean
gulp.task('other_clean', function(){
  return del(['./myportfolio.local/portfolio/**/*','!./myportfolio.local/portfolio/{words,words/**,words/**/*,chords,chords/**,chords/**/*}']);
});

// Files
gulp.task('other_files', function(){
  return gulp.src(['./src/portfolio/**/*','!./src/portfolio/{words,words/**,words/**/*,chords,chords/**,chords/**/*}'])
    .pipe(gulp.dest('./myportfolio.local/portfolio'));
});

// complicated tasks
gulp.task('other_build', function(){
  runSequence('other_clean', 'other_files');
});

// ===========================
// PORTFOLIO - ALL (except CHORDS and WORDS) Webpack for them
// ===========================

// complicated tasks
gulp.task('all_build', function(){
  runSequence('main_build', 'other_build');
});