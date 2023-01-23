const sharp = require('sharp');

sharp({
    create: {
      width: 1024,
      height: 400,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .overlayWith('screenshot.png')
  .toFile('composite_image.png')
  .then(() => {
    console.log('Image created successfully!');
  })
  .catch((err) => {
    console.log('Error:', err);
  });




 