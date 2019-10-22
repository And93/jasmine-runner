const {SpecReporter} = require('jasmine-spec-reporter');
const {JUnitXmlReporter} = require('jasmine-reporters');

const specReporter = new SpecReporter({
    spec: {
        displayStacktrace: true,
        displayErrorMessages: true
    },
    summary: {
        displayDuration: true
    },
    colors: {
        enabled: true
    }
});

const jUnitXmlReporter = new JUnitXmlReporter({
    savePath: './reports',
    consolidateAll: true
});

jasmine.getEnv().addReporter(specReporter);
jasmine.getEnv().addReporter(jUnitXmlReporter);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
