const Filter = (responses) => {
    const fs = require("fs");
    let rawdata = fs.readFileSync("./data/catalogue.json");
    let catalogue = JSON.parse(rawdata);
    const initialLength = catalogue.length

    try {
        for (let i = 0; i < catalogue.length; i++) {
            console.log('\n' + (i + 1) + '/' + catalogue.length)
            console.log(catalogue[i].title)

            if (catalogue[i].rating == undefined) {
                console.log(`=== The previous book did not have a rating and will be deleted from the catalogue ===`);
                catalogue.splice(i, 1);
                // index is set back to make up for the book that was removed
                i--;
            } else if (catalogue[i].rating < responses.minRating && responses.minRating != null) {
                console.log(`=== The previous book\'s rating was less than ${minRating} and will be deleted from the catalogue ===`);
                catalogue.splice(i, 1);
                i--;
            } else if (!responses.formats.includes(catalogue[i].format) && responses.formats != null) {
                console.log(`=== The previous book\'s format was not wanted and will be deleted from the catalogue ===`);
                catalogue.splice(i, 1);
                i--;
            } else if ((catalogue[i].salePrice * 100 / catalogue[i].listPrice > responses.discountRate) && responses.discountRate != null) {
                console.log(`=== The previous book\'s sale price wasn't a good enough deal and will be deleted from the catalogue ===`);
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