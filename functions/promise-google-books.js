/**
 * Go to url and get data about a particular book from the Google Books API
 * @param {string} url - URL that points to the Google Books API
 * @param {int} index - Position in the previously created book catalogue
 * @param {*} catalogue - Previously created catalogue returned from scraping Book Outlet
 */
const getData = (url, index, catalogue) => {
    return new Promise(async(resolve, reject) => {
        // Urls need to be built before, and then this will take a single url and add data to the catalogue
        // get book data from Google Books API
        const axios = require('axios');
        try {
            const response = await axios.get(url);
            let data = response.data

            catalogue[index] = { ...catalogue[index], rating: data.items[0].volumeInfo.averageRating };
            catalogue[index] = { ...catalogue[index], description: data.items[0].volumeInfo.description };
            catalogue[index] = { ...catalogue[index], isbn13: data.items[0].volumeInfo.industryIdentifiers[0].identifier };
            catalogue[index] = { ...catalogue[index], isbn10: data.items[0].volumeInfo.industryIdentifiers[1].identifier };

            resolve()
        } catch (err) {
            reject('Something went wrong looking up a book ==> ' + err)
        }

    });
}


/**
 * Asyncronously compare all book results to Book Outlet, and return the catalogue whether or not errors occur in any of the fetches.
 * @param {obj} catalogue - The book catalogue that was returned from scraping Book Outlet
 */
const GetReviews = (catalogue) => {
    return new Promise(async (resolve, reject) =>  {
        const key = `AIzaSyCQX1cevAq9WAcfvGU6XMVuiDrXwujEKQU`;
        
        const urls = []
        catalogue.forEach(book => {
            urls.push(`https://www.googleapis.com/books/v1/volumes?q=${book.title}+inauthor:${book.author}&${key}`)
        });
        console.log('Comparing books to Google Books for reviews...')

        const promises = urls.map((url, index) => {
            return getData(url, index, catalogue).catch(err => console.log(err))
        })
        
        Promise.allSettled(promises)
            .then(() => resolve(catalogue))
            .catch(err => reject(err))
    });
}

exports.GetReviews = GetReviews