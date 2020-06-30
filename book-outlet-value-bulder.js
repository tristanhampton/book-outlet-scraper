const scraper = require('./book-outlet-scraper.js');
const booksAPI = require('./google-books-axios.js');

try  {
    scraper.BookOutletScraper()
    booksAPI.GetReview()
} catch (err) {
    console.log(err)
}