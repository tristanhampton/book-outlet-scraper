const menu = require('./functions/menu');
const scraper = require('./functions/promise-scraper');
const books = require('./functions/promise-google-books');
const filter = require('./functions/book-filter');


const App = async () => {
    try {
        const input = await menu.LaunchMenu();
        scraper.BookOutletScraper(input).then( () => {
            return books.GetReviews()
        }).then( () => {
            return filter.Filter(input)
        }).finally( () => {
            console.log('\nThanks for using the Book Outlet Scraper! :)')
        })
    } catch (err) {
        console.log('Error!! ' + err)
    }
}

App();
