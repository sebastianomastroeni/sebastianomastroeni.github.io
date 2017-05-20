"use strict";

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config =  require('./_gulp-tasks/config.js'),
    printSuccess = require('./_gulp-tasks/printSuccess.js'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    ghPages     = require('gulp-gh-pages'),
    clean = require('gulp-clean');

var reload = browserSync.reload;

require('require-dir')('./_gulp-tasks');

gulp.task('apply-prod-environment', function() {
    process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
    process.env.NODE_ENV = 'production';
    if (process.env.NODE_ENV != 'production') {
        throw new Error("Failed to set NODE_ENV to PRODUCTION!");
    } else {
        printSuccess("Successfully set NODE_ENV to production",'');
    }
});

gulp.task('clean', function () {
    return gulp.src('web', {read: false})
        .pipe(clean());
});

gulp.task('watch', ['jekyll','sass','server','browserify'], function() {
    watch(config.dev.sass+'**/*.scss', { usePolling: true }, function() {
        gulp.start(['sass']);
    });
    watch(['**/*.html','!build/*.html'], { usePolling: true }, function() {
        gulp.start(['jekyll']);
    });
});

gulp.task('default',['watch']);

gulp.task('build', function(){
    runSequence(
        'clean',
        'apply-prod-environment',
        'browserify',
        'sass',
        'uglify:js',
        'uglify:css'
    );
});