const puppeteer = require('puppeteer');
const fs = require('fs');
const validUrl = require('valid-url');
//leggi il file tools.json
const data = fs.readFileSync('tools.json', 'utf8');
console.log(data);
//leggi ogni elemeneto dell'oggetto tools
const tools = JSON.parse(data);
//scorrilo
var i = 0;


screenshot(0);

async function screenshot(idx) {
    var tool = tools[idx];
    console.log(tool);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    if (!/^https?:\/\//i.test(tool.url)) {
    testUrl = 'http://' + tool.url;
    }

    if (validUrl.isUri(tool.url)) {
      

    await page.goto(tool.url);
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
      path: tool.category + "/media/" +  tool.title + '.png',
      clip: {
        x: 0,
        y: 0,
        width: dimensions.width,
        height: dimensions.height
      }
    });
    await browser.close();


    } else {
      console.log(`${tool.title} non funziona`);
    }


    //se idx è minore della lunghezza dell'array tools
    if (idx < tools.length - 1) {
        //chiamati la funzione screenshot passando come parametro idx + 1
        screenshot(idx + 1);
    }
  }











