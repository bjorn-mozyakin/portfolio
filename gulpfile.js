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
  console.log("It's alive!!!");
});

// Clean
gulp.task('clean', function(){
  return del('./myportfolio.local/portfolio/chords');
});

// HTML
gulp.task('html', function(){
  return gulp.src('./src/portfolio/chords/**/*.html')
    // .pipe(concat('index.html'))
    // .pipe(newer('./myportfolio.local/portfolio/chords'))
    // .pipe(gulpIf(!isDevelopment, combine(rev(), revReplace({
    //   manifest: gulp.src('manifest/css.json')
    // }))))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

gulp.task('pug', function(){
  return gulp.src('./src/portfolio/chords/**/*.pug', {base: 'src'})
    .pipe(pug())
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

// Images
gulp.task('img', function(){
  return gulp.src(['./src/portfolio/chords/img/**/*', '!./src/portfolio/chords/img/sprite_png/**/*', '!./src/portfolio/chords/img/sprite_png', '!./src/portfolio/chords/img/sprite_svg/**/*', '!./src/portfolio/chords/img/sprite_svg'])
    // .pipe(newer('./myportfolio.local/portfolio/chords/img'))
    // .pipe(imagemin({
    //   progressive: true,
    // }))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords/img'));
});

// Sprite
gulp.task('sprite_png', function () {
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

gulp.task('sprite_svg', function () {
    var spriteData = gulp.src('./src/portfolio/chords/img/sprite_svg/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./src/portfolio/chords/img/sprite_svg'));

    return spriteData;
});

// Styles
gulp.task('sass', function(){
  return gulp.src('./src/portfolio/chords/**/*.scss')
    .on('data', function(file) {
      console.log(file);
    })
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', 'ie 11'))
    .pipe(gulp.dest('./myportfolio.local/portfolio/chords'));
});

gulp.task('css', function(){
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
gulp.task('scripts', function(){
  return gulp.src('./src/portfolio/chords/js/**/*.js')
    // .pipe(newer('./myportfolio.local/portfolio/chords/js'))
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
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
gulp.task('build', function(){
  runSequence('clean', 'html', 'sass', 'scripts', 'sprite_png', 'img');
  // runSequence('clean', 'html', 'assets', 'sass', 'scripts');
});

gulp.task('watch', function() {
  // gulp.watch('./src/portfolio/chords/**/*.pug', ['pug']);
  gulp.watch('./src/portfolio/chords/**/*.html', ['html']);
  gulp.watch('./src/portfolio/chords/img/strite_png/**/*.{png,jpg,jpeg}', ['sprite_png']);
  gulp.watch('./src/portfolio/chords/img/**/*.*', ['img']);
  gulp.watch('./src/portfolio/chords/styles/**/*.scss', ['sass']);
  // gulp.watch('./src/portfolio/chords/styles/**/*.css', ['css']);
  gulp.watch('./src/portfolio/chords/js/**/*.js', ['scripts']);
})

gulp.task('serve', function(){
  browserSync.init({
    server: './myportfolio.local/portfolio/chords'
  });

  browserSync.watch('./myportfolio.local/portfolio/chords/**/*.*').on('change', browserSync.reload);
});

gulp.task('devloh', function(){
  runSequence('build', 'watch');
});

gulp.task('dev', function(){
  runSequence('build', ['watch', 'serve']);
});

// gulp.task('dev',
//   gulp.series('build', gulp.parallel('watch', 'serve'))
// );

// ===================
// DEPLOY TASKS
// ===================

// // Make archive
// gulp.task('archive', function() {
//   return gulp.src('./myportfolio.local/portfolio/chords/**/*')
//     // .pipe(del('./archive.tar.gz'))
//     .pipe(tar('archive.tar'))
//     .pipe(gzip())
//     .pipe(gulp.dest('.'))
//   });

// // Upload files to remote server
// gulp.task('ftp', function() {
//   return gulp.src("./archive.tar.gz")
//     .pipe(ftp({
//       host: "home.twinpro.ru",
//       user: "twinpro",
//       pass: "ip7ZBTB9",
//       remotePath: "/mysite"
//     }));
// });

// gulp.task('sftp', function() {
//   return gulp.src("./archive.tar.gz")
//     .pipe(sftp({
//       host: "home.twinpro.ru",
//       user: "twinpro",
//       pass: "ip7ZBTB9"
//     }));
// });



// }
// );