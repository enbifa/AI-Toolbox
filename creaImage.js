
 const Jimp = require("jimp");
 var ColorThief = require('color-thief-jimp');
 
 Jimp.read("screenshot.png")
 .then(image => {
     image.resize(256, 256)
     var dominantColor = ColorThief.getColor(image);
     console.log(dominantColor);
     new Jimp(1024, 400, dominantColor, (err, img) => {
       img.write("colored_image.png");
     });
 })
 .catch(err => {
     console.log('Error' )   
     console.error(err);
 });
 