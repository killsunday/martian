'use strict';

var jspm = require('jspm');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var karma = require('karma').server;
var bundleOptions = {
        minify: false,
        sourceMaps: false
    };
var inspectSrc = [
    'src/lib/*',
    'src/model/*',
    'src/api/*',
    'src/error/*'
];

/*** js sub tasks ***/
gulp.task('default', function(cb) {
    var outFile = 'martian.js';
    jspm.bundleSFX('martian', outFile, bundleOptions).then(function() {
        var stream = gulp.src(outFile)
            .pipe(plumber())
            .pipe(gulp.dest('.'));
        cb();
    }).catch(function(err) {
        cb(err);
    });
});

/*** js tests ***/
gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});


/*** sub tasks ***/
gulp.task('inspect:lint', function() {
    var jshint = require('gulp-jshint');
    var stylish = require('jshint-stylish');
    return gulp.src(inspectSrc)
        .pipe(cached('inspect:lint'))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('inspect:jscs', function() {
    var codeStyle = require('gulp-jscs');
    return gulp.src(inspectSrc)
        .pipe(cached('inspect:jscs'))
        .pipe(codeStyle());
});

/*** main tasks ***/
gulp.task('inspect', [ 'inspect:lint', 'inspect:jscs' ]);
