const Jasmine = require('jasmine');
const {SpecReporter} = require('jasmine-spec-reporter');
const {JUnitXmlReporter} = require('jasmine-reporters');
const yargs = require('yargs');

const {argv} = yargs
    .string('spec')
    .default('spec', '');

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

const jasmine = new Jasmine();

jasmine.loadConfigFile('src/support/jasmine.json');
jasmine.addReporter(specReporter);
jasmine.addReporter(jUnitXmlReporter);
jasmine.execute([argv.spec]);

// "yargs": "14.2.0"
// "test": "node index.js"
// npm test
// npm test -- --spec=path/to/spec/test.spec.js
