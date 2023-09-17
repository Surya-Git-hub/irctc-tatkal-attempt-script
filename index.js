import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://www.irctc.co.in/');

    // Set screen size
      await page.setViewport({width: 1080, height: 1024});

    // Print the full title
    // 1. go to login page


    // 2. login user


    // 3. book ticket
    console.log('The irctc opened');
    const fromElement = await page.waitForSelector('#origin > span > input');
    await fromElement.type('H NIZAMUDDIN - NZM (NEW DELHI)');
    const toStation = await page.waitForSelector('#destination > span > input');
    await toStation.type('DEHRADUN - DDN ');
    const journeydate = await page.waitForSelector('#jDate > span > input');
    await journeydate.click()
    await page.focus('#jDate > span > input');
    await page.keyboard.down('Control');
    await page.keyboard.press("A");
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await journeydate.type('16/09/2023');
    // const jdate = await page.waitForSelector('#jDate > span > div > div > div.ui-datepicker-calendar-container.ng-tns-c58-10.ng-star-inserted > table > tbody > tr:nth-child(3) > td.ng-tns-c58-10.ui-datepicker-current-day.ui-datepicker-today.ng-star-inserted > a');
    // await jdate.click();
    // const jClass = await page.waitForSelector('#journeyClass > div');
    // await jClass.click();
    // const AC3Class = await page.waitForSelector('#journeyClass > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c65-11.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > ul > p-dropdownitem:nth-child(8) > li');
    // await AC3Class.click();
    // const ticketType = await page.waitForSelector('#journeyQuota > div');
    // await ticketType.click();
    // const tatkal = await page.waitForSelector('#journeyQuota > div > div.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c65-12.ui-dropdown-panel.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-star-inserted > div > ul > p-dropdownitem:nth-child(5) > li');
    // await tatkal.click();
    const searchButton = await page.waitForSelector("#divMain > div > app-main-page > div > div > div.level_2.slanted-div > div.col-xs-12.remove-padding.tbis-box.tbis-box-pad > div:nth-child(1) > app-jp-input > div > form > div:nth-child(5) > div.col-md-3.col-sm-12.col-xs-12.remove-pad > button");
    await searchButton.click();

})();