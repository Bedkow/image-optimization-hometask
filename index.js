const sharp = require('sharp');
const fs = require("fs");
const path = require('path');

const dirPath = path.join(__dirname, "images");

fs.readdir(dirPath, function(err, files){
    if (err) {
        return console.log(err)
    }

    files.forEach(function (file) {
        let filePath = "images/" + file;
        console.log(filePath)
        sharp(filePath)
        .resize(320, 240)
        .toFile(`${file}.webp`)
        .then(info => {console.log(info)})
        .catch(err => {console.log(err)});
    })
})