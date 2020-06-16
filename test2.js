const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('test2', () => {
    const driver = new Builder().forBrowser('firefox').build();

    it('go to digitebl', async () => {
      await driver.get("https://test.digitebl.com/home");
		await driver.findElement(By.linkText("LOGIN")).click();
		await driver.findElement(By.xpath("//button[@id='signupLink']/u")).click();
		await driver.findElement(By.id("registerButton")).click();
		await driver.findElement(By.linkText("LOGIN")).click();
		await driver.findElement(By.id("loginButton")).click();
		await driver.findElement(By.linkText("LOGIN")).click();
		await driver.findElement(By.id("loginButton")).click();
		await driver.findElement(By.id("mobileNo")).click();
		await driver.findElement(By.id("mobileNo")).clear();
		await driver.findElement(By.id("mobileNo")).sendKeys("5263");
		await driver.findElement(By.id("pin")).click();
		await driver.findElement(By.id("pin")).clear();
		await driver.findElement(By.id("pin")).sendKeys("1234");
		await driver.findElement(By.id("loginButton")).click();
    });
});