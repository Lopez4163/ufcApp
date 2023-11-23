const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let ufcScrapedRosterArray = []
  for (let pageNumber = 0; pageNumber <= 87; pageNumber++) {
    await page.goto(
        `https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=${pageNumber}`,
        {timeout: 50000},

  );

    const fighterScrape = await page.evaluate(() => {
      const fightersArray = [];
      const fighters = Array.from(
          document.querySelectorAll(".c-listing-athlete-flipcard__front"),
      );

      fighters.forEach((element) => {
        const fightersObject = {
          imgSrc :
          element
              .querySelector(".c-listing-athlete__thumbnail img")
              ?.getAttribute("src") || "",
          name: element
              .querySelector(".c-listing-athlete__name")
              .textContent.trim(),
          nickname:
              element
                  .querySelector(".c-listing-athlete__nickname")
                  .textContent.trim() || "No Nickname",
          weightClass: element
              .querySelector(".c-listing-athlete__title .field__item")
              .textContent.trim(),
          record: element
              .querySelector(".c-listing-athlete__record")
              .textContent.trim(),

        };
        fightersArray.push(fightersObject);

      });

      return fightersArray;
    });
    console.log(`Page: ${pageNumber}`)
    ufcScrapedRosterArray = [...ufcScrapedRosterArray, ...fighterScrape]
    await fs.writeFile(`pageData.json`, JSON.stringify(ufcScrapedRosterArray), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Data  of  Page Scraped`);
      }
    });

  }

  await browser.close();
};

main();
