const puppeteer = require('puppeteer');
const fs = require('fs');

let page = 1
let size = 300
let url = `https://bookoutlet.ca/Store/Browse?Nc=31&Ns=600-1421&page=${page}&size=${size}&sort=popularity_0`


const BookOutletScraper = async() => {
    try {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        await page.goto(url)
        await page.waitForSelector('a.line-clamp-2')

        const bookList = await page.evaluate(() => {
            // get data-text from titles
            let titleNodeList = document.querySelectorAll('a.line-clamp-2');
            let authorNodeList = document.querySelectorAll('p.author');
            let formatNodeList = document.querySelectorAll('p.small');
            let listPriceNodeList = document.querySelectorAll('.price-h6 span:first-of-type span:last-of-type');
            let salePriceNodeList = document.querySelectorAll('.price-h6 span:last-of-type span');
            let pagination = document.querySelector('[aria-label="page navigation"]');
            let catalogueArray = [];

            for (let i = 0; i < titleNodeList.length; i++) {
                catalogueArray[i] += {
                    title: titleNodeList[i].dataset.text,
                    author: authorNodeList[i].innerText.trim(),
                    format: formatNodeList[i].innerText.trim(),
                    listPrice: listPriceNodeList[i].innerText.slice(1),
                    salePrice: salePriceNodeList[i].innerText.slice(7)
                }
            }
            return catalogueArray
        })

        fs.writeFile('catalogue.json', JSON.stringify(bookList, null, '\t'), function(err) {
            if (err) throw err
            console.log('Saved!');
        })

    } catch (err) {
        console.log(err)
        await browser.close();
        console.log('Browser closed due to error.')
    }
}

BookOutletScraper();