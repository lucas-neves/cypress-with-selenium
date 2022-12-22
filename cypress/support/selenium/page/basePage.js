var webdriver = require('selenium-webdriver')
const { By } = require('selenium-webdriver')
require('chromedriver')
var driver = new webdriver.Builder().forBrowser('chrome').build()
driver.manage().setTimeouts({ implicit: (30000) })

class BasePage {

    constructor() {
        global.driver = driver
    }
    async goToUrl(theURL) {
        await driver.get(theURL)
    }
    async enterTextByCss(css, searchText) {
        await driver.findElement(By.css(css)).sendKeys(searchText)
    }
    async clickByCss(css) {
        await driver.findElement(By.css(css)).click()
    }
    async clickByText(text) {
        await driver.sleep(2000)
        await driver.findElement(By.xpath(`//*[contains(text(),'${text}')]`)).click()
    }
    async validateMessage(msg) {
        await driver.wait(() => driver.findElement(By.xpath(`//*[contains(text(),'${msg}')]`)).isDisplayed(), 10000)
    }
    async closeBrowser() {
        await driver.quit()
    }
}

module.exports = BasePage
