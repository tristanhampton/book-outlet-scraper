

const BookOutletScraper = async() => {
    const puppeteer = require('puppeteer');
    const fs = require('fs');
    
    let pagenumber = 1
    let size = 300
    let url = `https://bookoutlet.ca/Store/Browse?Nc=31&Ns=600-1421&page=${pagenumber}&size=${size}&sort=popularity_0`
    let i = 0
    try {
        // Open Browser
        const browser = await puppeteer.launch({headless: true});
        // Open new page
        const page = await browser.newPage();
        // Go to URL
        await page.goto(url)
        // Wait for selector to appear before continuing
        await page.waitForSelector('a.line-clamp-2')

        // Get the next button to starrt the while loop
        let nextButton = 0


        
        let catalogueArray = [];
        let tempCatalogueArray = []
        try {
            // While there is still a next button on the pagination, continue scraping
            while (nextButton != null) {
                await page.goto(`https://bookoutlet.ca/Store/Browse?Nc=31&Ns=600-1421&page=${pagenumber}&size=${size}&sort=popularity_0`)
                await page.waitForSelector('a.line-clamp-2')

    
                tempCatalogueArray = await page.evaluate((pagenumber) => {
                    let titleNodeList = document.querySelectorAll('a.line-clamp-2');
                    let authorNodeList = document.querySelectorAll('p.author');
                    let formatNodeList = document.querySelectorAll('p.small');
                    let listPriceNodeList = document.querySelectorAll('.price-h6 span:first-of-type span:last-of-type');
                    let salePriceNodeList = document.querySelectorAll('.price-h6 span:last-of-type span');
                    let catalogueArray = [];

                    for (let i = 0; i < titleNodeList.length; i++) {
                        catalogueArray[i] = {
                            title: titleNodeList[i].dataset.text,
                            author: authorNodeList[i].innerText.trim(),
                            format: formatNodeList[i].innerText.trim(),
                            listPrice: listPriceNodeList[i].innerText.slice(1),
                            salePrice: salePriceNodeList[i].innerText.slice(7)
                        }
                    }
                    return catalogueArray
                })

                catalogueArray = [...catalogueArray, ...tempCatalogueArray];
                
                pagenumber++
                nextButton = await page.evaluate(() => document.querySelector('[aria-label="Next"]')) 
            }
            
        } catch(err) {
            console.log(err)
        }

        fs.writeFile('catalogue.json', JSON.stringify(catalogueArray, null, '\t'), function(err) {
            if (err) throw err
            console.log('Saved!');
        })

    } catch (err) {
        console.log(err)
        await browser.close();
        console.log('Browser closed due to error.')
    }
}

exports.BookOutletScraper = BookOutletScraper