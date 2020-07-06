const BookOutletScraper = (userInput) => {
    return new Promise(async (resolve, reject) => {
        const puppeteer = require('puppeteer');
        const fs = require('fs');

        let pagenumber = 1
        let size = 300
        let url = userInput.genre
        let i = 0
        let catalogueArray = [];
        let tempCatalogueArray = []
        let nextButton = 0
        // Open Browser
        const browser = await puppeteer.launch({ headless: true });
        // Open new page
        const page = await browser.newPage();

        while (nextButton != null) {
            await page.goto(url + `&page=${pagenumber}`)
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
                        listPrice: Number(listPriceNodeList[i].innerText.slice(1)),
                        salePrice: Number(salePriceNodeList[i].innerText.slice(7))
                    }
                }
                return catalogueArray
            })

            catalogueArray = [...catalogueArray, ...tempCatalogueArray];

            pagenumber++
            nextButton = await page.evaluate(() => document.querySelector('[aria-label="Next"]'))
        }

        await fs.writeFile('data/catalogue.json', JSON.stringify(catalogueArray, null, '\t'), function (err) {
            if (err) throw err
            console.log('Saved the catalogue from Book Outlet!');
        })

        if (catalogueArray.length > 0)
            resolve()
        else 
            reject()
    })
}

exports.BookOutletScraper = BookOutletScraper