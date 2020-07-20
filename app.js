const menu = require('./functions/menu');
const scraper = require('./functions/promise-scraper');
const books = require('./functions/promise-google-books');
const filter = require('./functions/book-filter');

/**
 * The Book Outlet Value Generator was made to prompt a user for what parameters they're looking for.
 * Then the app will scrape the website, compare results to Google Books to get review  and description data.
 * Finally the data that is returned is filtered and saved to a JSON file for the user.
 */
const App = async () => {
    try {
        const input = await menu.LaunchMenu();
        let catalogue = await scraper.BookOutletScraper(input);
        catalogue = await books.GetReviews(catalogue) 
        await filter.Filter(catalogue, input)
    } catch (err) {
        console.log('Error!! ' + err)
    } finally {
        console.log('Thanks for using the Book Outlet book finder!')
    }
}

App();
