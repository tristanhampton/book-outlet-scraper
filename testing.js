const fs = require("fs");
let rawdata = fs.readFileSync("catalogue.json");
let catalogue = JSON.parse(rawdata);

for (let i=0; i < catalogue.length; i++) {
    try {
        if (catalogue[i].rating == undefined){
            console.log('No rating!!!')
        } else {
            console.log(catalogue[i].rating);
        }
    } catch(err) {
        console.log('Caught!' + err)
    }
}