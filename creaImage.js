
 const Jimp = require("jimp");
 var ColorThief = require('color-thief-jimp');
 
 Jimp.read('screenshot.png')
 .then(lenna => {
    return lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write('screenshot1.png'); // save
 })
 .catch(err => {
   console.error(err);
 });


 