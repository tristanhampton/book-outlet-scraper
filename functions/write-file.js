const WriteJSON = (fileLocation, array) => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.writeFile(fileLocation, JSON.stringify(array, null, '\t'), (err) => {
            if (err) reject(err)
            else resolve(console.log(`The file was successfully written to: ${fileLocation}`))
        });
    });
}

exports.WriteJSON = WriteJSON