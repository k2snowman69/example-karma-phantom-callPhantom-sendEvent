var gulp = require('gulp');
var open = require('gulp-open');
var karma = require('karma');

/**
 * @name test
 * @description Runs unit tests with karma/phantomjs/mocha
 */
gulp.task('test', function(done) {

    return new karma.Server({
            configFile:  __dirname + '/karma.conf.js',
            action: 'run',
            singleRun: true,
            preprocessors: {
            },
            reporters: ['progress']
        }, done).on('error', function(err) {
           throw err;
       }).start();
   });


/**
 * @name default
 * @description The standard gulp process for building an app.
 * Runs through a list of tasks individually
 *
 * `$ gulp`
 */
gulp.task('default', function() {
  gulp.start('test');
});
