'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
    rigger = require('gulp-rigger');
var concat = require('gulp-concat'),
    jsConcat1 = './bower_components/owl-carousel/owl-carousel/owl.carousel.min.js',
    jsConcat2 = './bower_components/slick-carousel/slick/slick.min.js';
    

//////  Tasks

gulp.task('sass', function () {
  return gulp.src('./markup/scss/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./production/css'))
});

gulp.task('img', () =>
	gulp.src('markup/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/images'))
);

gulp.task('js', function () {
    return gulp.src('./markup/js/assets.js')
        .pipe(gulp.dest('./production/js'))
});

gulp.task('jquery', () =>
	gulp.src('./bower_components/jquery/dist/jquery.js')
		.pipe(gulp.dest('markup/js/'))
);

gulp.task('scripts', function() {
  return gulp.src([jsConcat1, jsConcat2])
    .pipe(concat('allInteractive.js'))
    .pipe(gulp.dest('markup/js/'));
});

gulp.task('watch', function() {
    gulp.watch("./markup/scss/**/*.scss", ['sass']);
    gulp.watch("./markup/js/assets.js", ['js']);
});

gulp.task('html', function () {
    gulp.src('markup/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('production/'));
});