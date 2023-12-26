const puppeteer = require('puppeteer');

async function scrapeFighterData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the initial page
  await page.goto('https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23');

  // Loop through each fighter
  const fighterLinks = await page.$$('.c-listing-athlete-flipcard__inner');
  for (const fighterLink of fighterLinks) {
    // Hover over the fighter
    await fighterLink.hover();
    await fighterLink.hover();
    await fighterLink.hover();

    // Click on "View Profile"
    await page.click('.c-listing-athlete-flipcard__action a');
    console.log('clicked view profile')
    await page.evaluate(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 14000);
      });
    });

    // const hovertest = await page.waitForSelector('.stats-records stats-records--two-column');
    // await hovertest.hover();

    // Scrape data from the profile page
    const fighterData = await page.evaluate(() => {
      const fighterStatsArray = [];
        const fighterStats = Array.from(
      document.querySelectorAll(".l-page")
        );
        fighterStats.forEach((element) => {

            const fighterStatsObject = {
                // imgSrc :
                // element
                //     .querySelector(".c-listing-athlete__thumbnail img")
                //     ?.getAttribute("src") || "",
                winsByKnockout: element
                    .querySelector(".c-stat-compare__group ")
                    .innerHTML
                // nickname:
                //     element
                //         .querySelector(".c-listing-athlete__nickname")
                //         .textContent.trim() || "No Nickname",
                // weightClass: element
                //     .querySelector(".c-listing-athlete__title .field__item")
                //     .textContent.trim(),
                // record: element
                //     .querySelector(".c-listing-athlete__record")
                //     .textContent.trim(),
            };
            fighterStatsArray.push(fighterStatsObject);
        });
        return fighterStatsArray;
    });

    console.log('Fighter Data:', fighterData );

    // Navigate back to the original page
    await page.goBack();
  }

  // Close the browser
  // await browser.close();
}

scrapeFighterData();
