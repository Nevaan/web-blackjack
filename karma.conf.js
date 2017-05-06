// Karma configuration
// Generated on Tue Mar 14 2017 18:13:48 GMT+0100 (CET)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['systemjs', 'jasmine'],
        plugins: [
            'karma-systemjs',
            'es6-module-loader',
            'karma-jasmine',
            "karma-spec-reporter",
            "karma-phantomjs-launcher"
        ],
        files: [
            {pattern: 'app/**/*.ts', included: false, watched: true},
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
            'node_modules/lodash/lodash.js',
            'app/test/**/*.spec.ts'
        ],
        systemjs: {
            configFile: './karma.system.conf.js',
            config: {
                baseURL: ''
            }
        },
        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}