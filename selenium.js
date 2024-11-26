const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testGoogleSearch() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Test Case 1: Verify Google Homepage Opens
        await driver.get('https://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        console.log('Test Case 1 Passed: Google homepage opened successfully.');

        // Test Case 2: Verify Search Box Accepts Input
        await searchBox.sendKeys('Dhoni');
        console.log('Test Case 2 Passed: Search box accepts input.');

        // Test Case 3: Verify Search Results Are Displayed
        await searchBox.sendKeys(Key.RETURN);
        await driver.wait(until.titleContains('Dhoni'), 5000);
        console.log('Test Case 3 Passed: Search results are displayed.');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        await driver.quit();
    }
})();
