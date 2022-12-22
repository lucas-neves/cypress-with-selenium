const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1336,
  viewportHeight: 768,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  requestTimeout: 30000,
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
