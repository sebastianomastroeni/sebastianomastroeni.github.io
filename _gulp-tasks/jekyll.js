"use strict";

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    exec = require('child_process').exec;

var config = require('./config.js'),
    printError = require('./printError.js');

gulp.task('jekyll', function () {
    var buildCommand = 'jekyll build';
    exec(buildCommand, function(err, stdout, stderr){
        if(err) {
           printError('Jekyll: ', err); 
        }
        browserSync.reload();
    });
});
