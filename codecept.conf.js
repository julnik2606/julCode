const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    ResembleHelper : {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder" : "./screenshots/base/",
      "baseFolder": "./screenshots/base/",
      "diffFolder": "./screenshots/diff/"
    },
    REST: {
      endpoint: "https://reqres.in",
    },
    TestCafe : {
      url: "https://test6.emex.ru/",
      waitForTimeout: 1000,
      show: true,
      windowSize: "1366x768",
      //browser: "browserstack:safari@14.0:OS X Big Sur"
      browser: "chrome"
    },
    ChaiWrapper : {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {},
  }
}
