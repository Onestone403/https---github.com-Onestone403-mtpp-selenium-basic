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
            

        });

    });
});