const puppeteer = require('puppeteer');
const fs = require('fs')

const TopTenScraper = async() =>  {
    try {
        const browser =  await  puppeteer.launch({headless: false});
        const page = await browser.newPage();

        await page.goto('https://news.ycombinator.com/');
        await page.waitForSelector('a.storylink');

        const news = await page.evaluate(() =>  {
            let titleNodeList = document.querySelectorAll('a.storylink');
            let ageList = document.querySelectorAll('span.age');
            let scoreList = document.querySelectorAll('span.score');
            let titleLinkArray =  [];
            for (let i = 0; i < titleNodeList.length; i++) {
                titleLinkArray[i] = {
                    title: titleNodeList[i].innerText.trim(),
                    link: titleNodeList[i].getAttribute('href'),
                    age: ageList[i].innerText.trim(),
                    score: scoreList[i].innerText.trim()
                };
            };
            return titleLinkArray
        })

        await browser.close();

        fs.writeFile('hackernews.json', JSON.stringify(news), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });

    } catch(err) {
        console.log(err);
        await browser.close();
        console.log('Browser closed with error.')
    }
}

TopTenScraper()