
// What do i need???
// BookOutletScraper is essentially done, until I can make a menu that will allow me to customize the query
// GetReviews needs to:

// FilterCatalogue
//      - Remove anything lower than a 4 star review
const scraper = require('./book-outlet-scraper.js');
const booksAPI = require('./google-books-axios.js');

const Program = () => {

    scraper.BookOutletScraper()
    //   .then((response) => {
    //     console.log(response);
    //     // booksAPI.GetReviews();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });  
}

Program()