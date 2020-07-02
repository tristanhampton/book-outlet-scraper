const GetReviews = async () => {
    const axios = require('axios');
    const fs = require('fs');
    const key =  `AIzaSyCQX1cevAq9WAcfvGU6XMVuiDrXwujEKQU`;
    const minRating = 3.8

    let rawdata = fs.readFileSync('catalogue.json');
    let catalogue = JSON.parse(rawdata);

    // The for loop works until google retuns something that doesn't match the structure
    // I need to fgurer out how to handle errors so it doesn't crash.
    for (let i=0; i < catalogue.length; i++) {

        // get book data from Google Books API
        url = `https://www.googleapis.com/books/v1/volumes?q=${catalogue[i].title}+inauthor:${catalogue[i].author}&${key}`;
        const response = await axios.get(url);
        let data = response.data

        console.log('\n' + i + '/' + catalogue.length)
        console.log(catalogue[i].title)

        // Get needed data from API and add it to the catalogue for each book
        try {
            catalogue[i] = {...catalogue[i],rating: data.items[0].volumeInfo.averageRating,
            };
            catalogue[i] = {...catalogue[i],description: data.items[0].volumeInfo.description,
            };
            catalogue[i] = {...catalogue[i],isbn13: data.items[0].volumeInfo.industryIdentifiers[0].identifier,
            };
            catalogue[i] = {...catalogue[i],isbn10: data.items[0].volumeInfo.industryIdentifiers[1].identifier,
            };

            

        } catch (err) {
            console.log("=== The previous book was missing some data and will be deleted from the catalogue ===");
            catalogue.splice(i,1)
            // index is set back to make up for the book that was removed
            i--
        }
        
    }

    fs.writeFile("catalogue.json",JSON.stringify(catalogue, null, "\t"),function (err) {
        if (err) throw err;
        console.log("Saved updated review info to the catalogue!");
      }
    );
};

GetReviews()

//  trying to get rid of Ghosts of Onyx

// const TestData = async () => {
//     const axios = require("axios");
//     const key = `AIzaSyCQX1cevAq9WAcfvGU6XMVuiDrXwujEKQU`;

//     let title = "Song of Blood & Stone (Earthsinger Chronicles, Bk. 1)";
//     let author = "Penelope, L.";
//     url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&${key}`;

//     const response = await axios.get(url);
//     let data = response.data
//     console.log(response.data)

// }

// TestData()


exports.GetReviews = GetReviews