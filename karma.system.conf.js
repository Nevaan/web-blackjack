    System.config({
        paths: {
            'systemjs': 'node_modules/systemjs/dist/system.js',
            'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
            'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'jasmine': 'node_modules/karma-jasmine/*',
            typescript: 'node_modules/typescript/lib/typescript.js',
            'plugin-typescript': 'node_modules/plugin-typescript/lib/plugin.js',
            'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
            lodash: 'node_modules/lodash/lodash.js'
        },
        map: {
            'systemjs': 'node_modules/systemjs/dist/system.js',
            'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
            'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
            lodash: 'node_modules/lodash/lodash.js'

        },
        meta: {
            '*.ts': {
                format: 'es6'
            }
        },
        packages: {
            'app/': { defaultExtension: 'ts' }
        },
        transpiler: 'typescript',
    });