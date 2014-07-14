'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:stage', function (callback) {
    runSequence('clean', 'env:prod', ['less', 'images', 'copy', 'scripts'], callback);
});
