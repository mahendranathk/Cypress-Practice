const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // on('file:preprocessor', webpackPreprocessor);
      // allureWriter(on, config);
      // return config;
      allureWriter(on, config);
      return config;
    },
    viewportHeight:1000,
    viewportWidth:600,
    defaultCommandTimeout:8000,
    pageLoadTimeout:8000,
    includeShadowDom:true,
    chromeWebSecurity:false,
    baseUrl:'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout:8000,
    pageLoadTimeout:8000,
    failOnStatusCode: false,
    "retries": {      
      "runMode": 1,      
      "openMode": 1
    }
   
    
  },
});
