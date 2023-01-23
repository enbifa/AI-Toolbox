# Color Thief with Jimp for NodeJs

A script for grabbing the color palette from an image. Uses Javascript and the [Jimp](https://github.com/oliver-moran/jimp) to make it happen.
This fork does NOT use canvas, and is can only used with NodeJs.

## Install NodeJs

Install the module via npm
```bash
npm install color-thief-jimp --save
```

And use it:
```js
var ColorThief = require('color-thief-jimp');
```

## How to use

### Get the dominant color from an image
```js
var ColorThief = require('color-thief-jimp');

// getColor(sourceImage[, quality])
var dominantColor = ColorThief.getColor(sourceImage);
// dominantColor = [intRed, intGreen, intBlue]
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
var ColorThief = require('color-thief-jimp');

// getPalette(sourceImage[, colorCount, quality])
var palette = ColorThief.getPalette(sourceImage, 8);
// palette = [ [intRed, intGreen, intBlue], [intRed, intGreen, intBlue], ... ]
```

## Changelog

### 2016-02-26
First release.

## Credits
Source code based on [color-thief](https://github.com/lokesh/color-thief/) ([MIT license](https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE))
by Lokesh Dhakar
lokeshdhakar.com
