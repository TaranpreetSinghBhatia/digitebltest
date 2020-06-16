const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('DefaultTest', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('go to digitebl', async () => {
        await driver.get("https://test.digitebl.com/home");
        
        await driver.findElement(By.linkText("LOGIN")).click();
		await driver.findElement(By.xpath("//button[@id='signupLink']/u")).click();
		await driver.findElement(By.id("name")).click();
		await driver.findElement(By.id("name")).clear();
		await driver.findElement(By.id("name")).sendKeys("taran");
		await driver.findElement(By.id("mobileNo")).clear();
		await driver.findElement(By.id("mobileNo")).sendKeys("8558967185");
		await driver.findElement(By.id("pin")).click();
		await driver.findElement(By.id("pin")).clear();
		await driver.findElement(By.id("pin")).sendKeys("123456");
		await driver.findElement(By.id("confirmPin")).click();
		await driver.findElement(By.id("registerButton")).click();
		await driver.findElement(By.id("confirmPin")).clear();
		await driver.findElement(By.id("confirmPin")).sendKeys("123456");
    });

});