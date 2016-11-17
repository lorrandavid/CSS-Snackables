var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    sass        = require('gulp-ruby-sass'),
    plumber     = require('gulp-plumber'),
    livereload  = require('gulp-livereload'),
    imagemin    = require('gulp-imagemin'),
    htmlmin     = require('gulp-minify-html'),
    prefix      = require('gulp-autoprefixer'),
    rename      = require('gulp-rename');

gulp.task('scripts', function(){
  return gulp.src('assets/src/js/*.js')
             .pipe(plumber())
             .pipe(uglify())
             .pipe(rename({suffix: '.min'}))
             .pipe(gulp.dest('assets/dist/js'))
             .pipe(livereload());
});

gulp.task('styles', function(){
  return sass('assets/src/scss/app.scss',{
             style: 'compressed'
         })
         .pipe(plumber())
         .on('error', sass.logError)
         .pipe(prefix({
             browsers: ['last 2 versions'],
         }))
         .pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest('assets/dist/css'))
         .pipe(livereload());
});

gulp.task('images', function(){
  return gulp.src('assets/src/images/*')
             .pipe(imagemin())
             .pipe(gulp.dest('assets/dist/images'));
});

gulp.task('watch', function(){
  livereload.listen();

  gulp.watch('assets/src/js/*.js', ['scripts']);
  gulp.watch('assets/src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles']);
