var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var concat = require('gulp-concat');
var superstatic = require('superstatic');
var open = require('open');

gulp.task('bundle-scripts', function () {
  
  return gulp.src('app/js/index.js')
    .pipe(browserify({transform: ['babelify', 'reactify'], debug: true}))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-html', function () {
  
  return gulp.src('./app/**.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-mock', function () {
  
  return gulp.src('./app/mock/starred.json')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  
  return gulp.watch('./app/**/*.*', ['default']);
});

gulp.task('serve', ['default'], function () {
  
  gulp.watch('./app/**/*.*', ['default']);
  
  var app = superstatic.server({
    config: {root: 'dist'},
    port: 3474
  });
  
  var server = app.listen(function (err) {
    
    console.log('Client started on port', 3474);
    
    process.nextTick(function () {
      
      open('http://localhost:3474');
    });
  });
});

gulp.task('default', ['bundle-scripts', 'copy-html'], function() {
  
  
});