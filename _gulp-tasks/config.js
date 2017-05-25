"use strict";

var makePath = (root, obj) => {
    for (let value in obj) {
        obj[value] = root + obj[value];
    }
    return obj;
};

var basedir = './';
var config = {
    dev: makePath(basedir + '_src/', {
        root: '',
        sass: 'scss/',
        media: 'img/',
        js: 'js/'
    }),
    prod: makePath(basedir+ 'assets/', {
        root: '',
        css: 'css/',
        media: 'img/',
        js: 'js/',
    }),
    isProduction : function() {
        return process.env.NODE_ENV == 'production';
    }
};


module.exports = config;
