var gulp = require('gulp');
var minify = require('gulp-uglify');
var rename = require('gulp-rename');
var src = './ajax.js';
var dist = './';
gulp.task('default', () => {
  gulp.src(src)
    .pipe(minify({
      ie8: true
    }))
    .pipe(rename({
      basename: 'ajax',
      suffix: '.min'
    }))
    .pipe(gulp.dest(dist))
})