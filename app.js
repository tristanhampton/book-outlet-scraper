const menu = require('./functions/menu')
const scraper = require('./functions/promise-scraper')
const books = require('./functions/promise-google-books')


const App = async () => {
    try {
        const input = await menu.LaunchMenu();
        await scraper.BookOutletScraper(input);
        books.GetReviews();
        console.log('done')
    } catch (err) {
        console.log('Error!! ' + err)
    }
}

App();
