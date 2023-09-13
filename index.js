import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.irctc.co.in/');

  // Set screen size
//   await page.setViewport({width: 1080, height: 1024});

  // Print the full title
  console.log('The irctc opened');
  const fromElement  = await page.waitForSelector('#origin > span > input');
await fromElement.type('H NIZAMUDDIN - NZM (NEW DELHI)');
  const toStation = await page.waitForSelector('#destination > span > input');
  await toStation.type('DEHRADUN - DDN ');
  const searchButton = await page.waitForSelector("#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(5) > div.col-md-3.col-sm-12.col-xs-12.remove-pad > button");
  await searchButton.click();
})();