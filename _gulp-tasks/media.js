"use strict";

var config = require('./config.js');
var gulp = require('gulp');

gulp.task('media', function(cb) {
    return gulp.src(config.dev.media + '/**/*')
    .pipe(gulp.dest(config.prod.media))
});
