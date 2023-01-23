const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://design.ai');
  await page.setViewport({width: 1280, height: 1024});
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  console.log('Dimensions:', dimensions);
  await page.screenshot({
    path: 'screenshot.png',
    clip: {
      x: 0,
      y: 0,
      width: dimensions.width,
      height: dimensions.height
    }
  });
  await browser.close();

})();




