const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('https://scenic-2017.appspot.com/1?');

    await driver.switchTo().frame(driver.findElement(By.css('iframe[src*="about:blank"]')));

    await sleep(3000);

    let container = await driver.findElement(By.css('swg-container'));
    
    // found the container
    console.log(`Container Element Found:`);
    console.log(container);

    try {
        await driver.findElement(By.css('iframe[src*="offersiframe"]'));
    } catch (e) {
        console.log('Offers Frame Not Found:')
        // error is caught here for nested frame lookup
        console.log(e);
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}