"use strict";

require('./sass');
require('./javascripts');
var gulp = require('gulp'),
    exec = require('child_process').exec;

var config = require('./config.js'),
    printError = require('./printError.js');

gulp.task('jekyll', function () {
    var buildCommand = 'jekyll build';
    exec(buildCommand, function(err, stdout, stderr){
        if(err) {
           printError('Jekyll: ', err); 
        }
        gulp.start(['sass','browserify']);
    });
});
