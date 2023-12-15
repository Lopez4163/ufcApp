const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.roster.watch/`, { timeout: 15000 }); // Reduce timeout to 15 seconds

    await page.waitForSelector('.rt-tbody'); // Wait for the selector to be present

    const rosterWatchScrape = await page.evaluate(() => {
      const scraperArray = [];
      const rosterWatchTable = Array.from(document.querySelectorAll(".rt-tbody"));

      rosterWatchTable.forEach((element) => {
        const rosterObject = {
          name: element.querySelector(".rt-tr").textContent.trim()
          // country: element.querySelector(".rt-td .rt-align-left .rt-valign-center").innerHTML

        };
        scraperArray.push(rosterObject);
      });

      return scraperArray;
    });

    console.log(rosterWatchScrape);
  } catch (error) {
    console.error('Error during scraping:', error);
  } finally {
    await browser.close();
  }
};

main();
