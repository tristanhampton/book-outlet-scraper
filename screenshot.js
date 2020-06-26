const puppeteer = require('puppeteer')

const screenshot = async () => {
    try {
        // Open the browser
        // headless: false will open a chromium browser
        const browser = await puppeteer.launch({headless: false});
        // Open a new page
        const page = await browser.newPage();
        // Enter url in page
        await page.goto('https://www.tristanhampton.ca');
        // Take screenshot
        await page.screenshot({path: 'screenshot.png'});
        // Close browser
        await browser.close();
        console.log('Browser Closed')
    } catch(err) {
        console.log(err)
        await browser.close()
        console.log('Browser closed')
    }
};

screenshot()