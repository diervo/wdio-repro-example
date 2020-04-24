/* eslint no-unused-vars: 0 */
const path = require('path');

exports.config = {
    specs: ['src/**/__wdio__/*.spec.ts'],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                // args: ['--headless'],
            },
        },
    ],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 90000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    automationProtocol: 'webdriver',
    services: ['selenium-standalone'],
    framework: 'jasmine',
    jasmineNodeOpts: {
        requires: ['ts-node/register'], // tranpile ts
    }
};
