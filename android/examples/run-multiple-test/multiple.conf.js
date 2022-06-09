exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

  updateJob: false,
  specs: ["./run-multiple-test/specs/multiple_test.js"],
  exclude: [],

  capabilities: [
    {
      project: "Fruit Shop Bot Project",
      build: "Webdriverio Android",
      name: "Fruit Shoppe Bots",
      device: "Google Pixel 3",
      os_version: "9.0",
      app: process.env.BROWSERSTACK_TESTING_APP_ID,
      "browserstack.debug": true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 30000,
  },
};
