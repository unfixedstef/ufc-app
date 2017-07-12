// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/auth/auth.e2e-spec.ts',
    './e2e/pages/favorites/*.e2e-spec.ts',
    './e2e/pages/help/*.e2e-spec.ts',
    './e2e/pages/dashboard/*.e2e-spec.ts',
    './e2e/pages/profil/*.e2e-spec.ts',
    './e2e/pages/search/*.e2e-spec.ts',
    './e2e/pages/tours/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
