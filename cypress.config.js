const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
pageLoadTimeout= 12000 // Set to a value that suits your need
   },
  },
});

