require("chromedriver")
const { Builder } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://k8s.bsstag.com/');
    await percySnapshot(driver, 'Homepage');

    await driver.get('https://k8s.bsstag.com/pricing');
    await percySnapshot(driver, 'Pricing');

    await driver.get('https://k8s.bsstag.com/integrations/automate');
    await percySnapshot(driver, 'Integrations');

    await driver.get('https://k8s.bsstag.com/docs');
    await percySnapshot(driver, 'Docs');
  } finally {
    await driver.quit();
  }
})();