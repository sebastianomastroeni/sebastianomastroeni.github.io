"use strict";

var makePath = (root, obj) => {
    for (let value in obj) {
        obj[value] = root + obj[value];
    }
    return obj;
};

var basedir = './';
var config = {
    dev: makePath(basedir + 'src/', {
        root: '',
        sass: 'scss/',
        js: 'js/',
        fonts: 'fonts/'
    }),
    prod: makePath(basedir+ 'build/', {
        root: '',
        css: 'assets/css/',
        js: 'assets/js/',
    }),
    isProduction : function() {
        return process.env.NODE_ENV == 'production';
    }
};


module.exports = config;
