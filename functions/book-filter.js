
/**
 * Filter out any data that doesn't match the criteria laid out by the user
 * @param {obj} catalogue - The catalogue of books that contains data from Book Outlet and Google Books 
 * @param {obj} responses - The user responses saved from the app menu used to filter the data in the catalogue
 */
const Filter = (catalogue, responses) => {
    return new Promise((resolve, reject) => {
        const fs = require("fs");
        const initialLength = catalogue.length
    
        for (let i = 0; i < catalogue.length; i++) {
            if (catalogue[i].rating == undefined) {
                catalogue.splice(i, 1);
                // index is set back to make up for the book that was removed
                i--;
            } else if (catalogue[i].rating <= responses.minRating && responses.minRating != null) {
                catalogue.splice(i, 1);
                i--;
            } else if (!responses.formats.includes(catalogue[i].format) && responses.formats != null) {
                catalogue.splice(i, 1);
                i--;
            } else if ((100-catalogue[i].salePrice * 100 / catalogue[i].listPrice) < responses.discountRate && responses.discountRate != null) {
                catalogue.splice(i, 1);
                i--;
            }
        }

        fs.writeFile('./data/filtered-catalogue.json', JSON.stringify(catalogue, null, '\t'), function (err) {
            if (err) 
                reject(err)
            else
                resolve(console.log(`\nSaved filtered results to new file. There are ${catalogue.length} results from an initial ${initialLength} results`))
        });
    });
}

exports.Filter = Filter