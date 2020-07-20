/**
 * Scrapes Book Outlet for each book available in a genre. The key to stopping it is to stop when there is no more next button available in the pagination.
 * @param {obj} userInput - User inpt saved from the app menu. Used in this case to build the URL to scrape the website
 */
const BookOutletScraper = (userInput) => {
    return new Promise(async (resolve, reject) => {
        const puppeteer = require('puppeteer');

        let pagenumber = 1
        let url = userInput.genre
        let catalogueArray = [];
        let tempCatalogueArray = []
        let nextButton = 0

        // Open Browser
        const browser = await puppeteer.launch({ headless: true });
        // Open new page
        const page = await browser.newPage();

        console.log('Please wait while we look up books on Book Outlet...')

        while (nextButton != null) {
            // Goes to the website with the specified page. Will go to each page until there is no next button on the pagination.
            await page.goto(url + `&page=${pagenumber}`)
            await page.waitForSelector('a.line-clamp-2')

            // Get all the data on the pag as arrays
            tempCatalogueArray = await page.evaluate((pagenumber) => {
                let titleNodeList = document.querySelectorAll('a.line-clamp-2');
                let authorNodeList = document.querySelectorAll('p.author');
                let formatNodeList = document.querySelectorAll('p.small');
                let listPriceNodeList = document.querySelectorAll('.price-h6 span:first-of-type span:last-of-type');
                let salePriceNodeList = document.querySelectorAll('.price-h6 span:last-of-type span');
                let catalogueArray = [];

                // Parse the data and save it
                for (let i = 0; i < titleNodeList.length; i++) {
                    catalogueArray[i] = {
                        title: titleNodeList[i].dataset.text,
                        author: authorNodeList[i].innerText.trim(),
                        format: formatNodeList[i].innerText.trim(),
                        listPrice: Number(listPriceNodeList[i].innerText.slice(1)),
                        salePrice: Number(salePriceNodeList[i].innerText.slice(7)),
                        url: titleNodeList[i].href
                    }
                }
                return catalogueArray
            })

            catalogueArray = [...catalogueArray, ...tempCatalogueArray];

            pagenumber++
            // switch comments to scrape multiple/one pages
            nextButton = await page.evaluate(() => document.querySelector('[aria-label="Next"]'))
            // nextButton = null
        }

        resolve(catalogueArray)
    })
}

exports.BookOutletScraper = BookOutletScraper