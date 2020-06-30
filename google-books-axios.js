const GetReview = async (data) => {
    const axios = require('axios');
    const key =  `AIzaSyCQX1cevAq9WAcfvGU6XMVuiDrXwujEKQU`;
    const query = 'Warriors'; // Title, usually
    const author = 'Martin, George R. R.';
    // const url = `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${key}`
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:${author}&${key}`
    const fs = require('fs');

    try {
        const response = await axios.get(url);
        const data=  response.data;
        fs.writeFile('google-boks-response.json', JSON.stringify(data, null, '\t'), function(err) {
            if (err) throw err
        })
    } catch (error) {
        console.log(error);
    }
}

exports.GetReview = GetReview