'use strict';
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

// Gulp task to minify SCSS files
gulp.task('sass', function () {
  return gulp.src(['./src/scss/sh-law-theme.scss', './src/scss/bootstrap.scss'])
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    // Minify the file
    .pipe(csso())
    // Add min to end of file
    .pipe(rename({ suffix: '.min' }))
    // Output
    .pipe(gulp.dest('./includes/assets/css'))
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./src/css/animate.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer())
    // Minify the file
    .pipe(csso())
    // Add min to end of file
    .pipe(rename({ suffix: '.min' }))
    // Output
    .pipe(gulp.dest('./includes/assets/css'))
});

// Gulp task compile multiple JS files and minify
gulp.task('pack-js', function () {    
  return gulp.src(['./src/js/jquery-3.2.1.slim.min.js','./src/js/popper.min.js','./src/js/bootstrap.min.js', './src/js/app.js'])
      .pipe(concat('sh-law-theme.min.js'))
      .pipe(minify({
        ext:{
            min:'.js'
        },
        noSource: true
    }))      
      .pipe(gulp.dest('./includes/assets/js'));
});

