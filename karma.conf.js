// Karma configuration
// Generated on Tue Nov 24 2015 16:49:55 GMT+0000 (GMT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/*.test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-trx-reporter'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'trx', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS_custom'],

    client: {
      useIframe: false
    },
    // you can define custom flags
    // This custom launcher is based off these links
    // https://github.com/karma-runner/karma-phantomjs-launcher/issues/19
    // https://stackoverflow.com/questions/34694765/take-screenshot-from-karma-while-running-tests-in-phantomjs-2
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          onPageCreated: function (newPage) {
            newPage.onCallback = function (data) {
              if (data.type === 'render') {
                newPage.render('foo.png');
              }
              else if (data.type === 'tab') {
                newPage.sendEvent('keypress', page.event.key.Tab, null, null, null);
              }
            };
          }
        }
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
