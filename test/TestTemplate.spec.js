const { By, Builder,until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");



suite(function(env) {
    describe('First script', function() {
        let driver;

        before(async function() {
            driver = await new Builder().forBrowser('chrome').build();
        });

        after(async () => await driver.quit());

        it('First Selenium script', async function() {
            await driver.get('https://www.youtube.com');
            let consentButton = await driver.wait(until.elementLocated(By.xpath("//div[@id='content']/div[2]/div[6]/div/ytd-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]")), 30000);
            await consentButton.click();

            await new Promise(r => setTimeout(r, 2000));
            let searchInput = await driver.findElement(By.id('search'));
            await searchInput.sendKeys('Master professional Software Egineering');

            let searchButton = await driver.findElement(By.id('search-button-legacy'));
            await searchButton.click();

            let firstContent = await driver.findElement(By.xpath("//*[@id='contents']/ytd-video-renderer[1]"));
            await firstContent.click();

            let title = await driver.getTitle();
            assert.equal("",title)
            
            //let consentButton = await driver.findElement(By.xpath("//div[@id='content']/div[2]/div[6]/div/ytd-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]"))
            // let title = await driver.getTitle();
            // assert.equal("Web form", title);

            // await driver.manage().setTimeouts({ implicit: 500 });

            // let textBox = await driver.findElement(By.name('my-text'));
            // let submitButton = await driver.findElement(By.css('button'));
            // await new Promise(r => setTimeout(r, 2000));
            // await textBox.sendKeys('Selenium');
            // await new Promise(r => setTimeout(r, 2000));
            // await submitButton.click();

            // let message = await driver.findElement(By.id('message'));
            // let value = await message.getText();
            // assert.equal("Received!", value);


        });

    });
});