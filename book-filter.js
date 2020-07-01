const filter = () => {
    const fs = require("fs");
    let rawdata = fs.readFileSync("catalogue.json");
    let catalogue = JSON.parse(rawdata);
}