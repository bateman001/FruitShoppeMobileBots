const setup = require("./utils/setup");
require("dotenv").config;
const device = require("./utils/androidDevices");

global.globalStuff = [];
global.bsBuildId;
global.bsSessionId;

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
    key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

    updateJob: false,
    specs: ["./run-first-test/specs/Path1.js"],
    exclude: [],

    capabilities: [
        {
            project: "Fruit Shop Bot Project",
            build: "Webdriverio Android",
            name: "Path1: Dead Click + Failed Green Bean Checkout",
            device: device.device,
            os_version: device.os,
            app: process.env.BROWSERSTACK_APP_ID,
            "browserstack.debug": true
        }
    ],

    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    hostname: "hub-cloud.browserstack.com",
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 20000
    },

    beforeTest: async function (test) {
        globalStuff.push(Math.random());
    },

    async afterTest({ passed }) {
        if (passed) {
            console.log("test passed");
            // await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": ""}}');
        } else {
            console.log("test failed");
            // await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": ""}}');
        }
    },

    afterSession: async function (config, capabilities, specs) {
        // const wait = interval => new Promise(resolve => setTimeout(resolve, interval));
        // async function retry(
        //   fn,
        //   args,
        //   retriesLeft = 3,
        //   interval = 300,
        // ) {
        //   try {
        //     return await fn(...args);
        //   } catch (error) {
        //     await wait(interval);
        //     if (retriesLeft === 0) {
        //       throw new Error(error);
        //     }
        //     return retry(fn, args, --retriesLeft, interval);
        //   }
        // }

        // const promiseFn1 = function(val) {
        //   return new Promise( (resolve, reject) => {
        //     setup.getFSSessionUrl(re);
        //   });
        // }

        //await retry(promiseFn1, [bsBuildId, bsSessionId]);

        var fsSessionUrl = await setup.getFSSessionUrl(bsBuildId, bsSessionId);
        var bunsenUrl = await setup.createBunsenUrl(fsSessionUrl);
        console.log(`Session url: ${fsSessionUrl}`);
        console.log(`Bunsen url: ${bunsenUrl}`);
        //console.log(`\nGlobal stuff: ${globalStuff}\n`);
    }
};
