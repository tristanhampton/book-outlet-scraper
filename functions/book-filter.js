const Filter = (responses) => {
    const fs = require("fs");
    let rawdata = fs.readFileSync("./data/catalogue.json");
    let catalogue = JSON.parse(rawdata);
    const initialLength = catalogue.length

    try {
        for (let i = 0; i < catalogue.length; i++) {

            if (catalogue[i].rating == undefined) {
                catalogue.splice(i, 1);
                // index is set back to make up for the book that was removed
                i--;
            } else if (catalogue[i].rating < responses.minRating && responses.minRating != null) {
                catalogue.splice(i, 1);
                i--;
            } else if (!responses.formats.includes(catalogue[i].format) && responses.formats != null) {
                catalogue.splice(i, 1);
                i--;
            } else if ((catalogue[i].salePrice * 100 / catalogue[i].listPrice > responses.discountRate) && responses.discountRate != null) {
                catalogue.splice(i, 1);
                i--;
            }
        }

        fs.writeFile('./data/filtered-catalogue.json', JSON.stringify(catalogue, null, '\t'), function (err) {
            if (err) throw err
            console.log(`\nSaved filtered results to new file. There are ${catalogue.length} results from an initial ${initialLength} results`)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.Filter = Filter