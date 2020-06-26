const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('//*[@id="landingImage"]')
    const src =  await el.getProperty('src')
    const srcTxt = await src.jsonValue()

    const [el2] = await page.$x('//*[@id="productTitle"]')
    const txt = await el2.getProperty('textContent')
    const rawText = await txt.jsonValue()

    const [el3] = await page.$x('//*[@id="price_inside_buybox"]')
    const prc = await el3.getProperty('textContent')
    const rawPrice = await prc.jsonValue()

    console.log({srcTxt, rawText, rawPrice})

    browser.close()
}

scrapeProduct('https://www.amazon.ca/Magic-Gathering-Ikoria-Booster-Prerelease/dp/B086V69T6G?pf_rd_r=PJMAEMZ8WEWK1GEJWA0B&pf_rd_p=938d7b83-7244-4e39-8e69-5287fa380953&pd_rd_r=33a548c0-35f6-4cf5-bb72-897064973967&pd_rd_w=YEFlH&pd_rd_wg=unqsL&ref_=pd_gw_qpp')

