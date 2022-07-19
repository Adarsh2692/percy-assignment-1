require("chromedriver")
const { Builder } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.browserstack.com/');
    await percySnapshot(driver, 'Homepage', {widths: [375, 480, 720, 1280, 1440, 1920]});

    await driver.get('https://www.browserstack.com/pricing');
    await percySnapshot(driver, 'Pricing');

    await driver.get('https://www.browserstack.com/integrations/automate');
    await percySnapshot(driver, 'Integrations');

    await driver.get('https://www.browserstack.com/docs');
    await percySnapshot(driver, 'Docs');
  } finally {
    await driver.quit();
  }
})();