// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    allScriptsTimeout: 50000,
    specs: [
        './e2e/auth/login*.e2e-spec.ts',
        './e2e/pages/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        print: function () {
        }
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        var sr = {
            displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displaySuccessesSummary: true, // display summary of all successes after execution
            displayFailuresSummary: true,   // display summary of all failures after execution
            displayPendingSummary: true,    // display summary of all pending specs after execution
            displaySuccessfulSpec: true,    // display each successful spec
            displayFailedSpec: true,        // display each failed spec
            displayPendingSpec: true,      // display each pending spec
            displaySpecDuration: true,     // display each spec duration
            displaySuiteNumber: true,      // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        };
        require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter(sr));
    }
};
