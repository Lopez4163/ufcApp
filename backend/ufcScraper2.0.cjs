//       //   // ...fighter personal data
// fighterName: document.querySelector('.l-page__content .hero-profile__name ').innerText,
// POB: document.querySelector('.c-bio__row--1col:nth-child(2) .c-bio__text').innerText.trim(),
// age: document.querySelector('.c-bio__row--3col .field--name-age').innerText.trim(),

//       //   // ...fighter striking data
//       //    strikeAccuracy: document.querySelector('.c-overlap__chart').innerText.trim(),
//       //    sigStrikesAttempt: document.querySelector('.c-overlap__stats-value').innerText.trim(),
//       //    sigStrikesLandedPM: document.querySelector('.c-stat-compare__number').innerText.trim(),
//       //   sisStrDefense: profileSection.querySelector('.stats-records--two-column:nth-child(4) .c-stat-compare--no-bar').innerText .replace(/[^0-9%]/g, '').trim().slice(0, 3),
//       //
//       //   // ...fighter grappling data
//       //   takedownDefence: profileSection.querySelector('.stats-records--two-column:nth-child(4) .c-stat-compare--no-bar').innerText.replace(/[^0-9%]/g, '').trim().slice(3, 6),
//       //   takedownAccuracy: profileSection.querySelector('.stats-records:nth-child(2) .c-overlap__chart').innerText,
//       //   takedownsLanded: profileSection.querySelector('.stats-records:nth-child(2) .c-overlap__stats-value').innerText,
//       //   takeDownsAttempted: profileSection.querySelector('.stats-records:nth-child(2) .c-overlap__stats-wrap dl:nth-child(2) dd  ').innerText.trim(),
//       //
//       //   // ...Fight Stats
//       //   averageFightTime: profileSection.querySelector('.stats-records--two-column:nth-child(4) div:nth-child(1) .c-stat-compare--no-bar:nth-child(3) .c-stat-compare__group-2 .c-stat-compare__number ').innerText.trim(),
//       //
//       //   //***************** BELOW IS THE BEST WAY TO SCRAPE SOP FAR *****************//
//       //   winByKO_TKO: document.querySelector('.stats-records:nth-child(7) .c-stat-3bar__value').innerText.trim(),
//       //   winByDec: document.querySelector('.stats-records:nth-child(7) .c-stat-3bar__group:nth-child(2) .c-stat-3bar__value ').innerText.trim(),
//       //  winBySub: document.querySelector('.stats-records:nth-child(7) .c-stat-3bar__group:nth-child(3) .c-stat-3bar__value ').innerText.trim(),
//       //   // ***************** SPECIAL ACCOLADES *****************//
//       //   SpecialStats: document.querySelector('.stats-records--one-column')?.innerText.trim() ?? 'N/A',

const puppeteer = require("puppeteer");
const fs = require("fs").promises;

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let ufcScrapedRosterArray = [];

  try {
    // Loop through the roster pages
    for (let pageNumber = 0; pageNumber <= 90; pageNumber++) {
      // Navigate to the roster page
      await page.goto(
        `https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=${pageNumber}`,
        { timeout: 50000 },
      );

      // Scrape fighter data from the roster page
      const fighterScrape = await page.evaluate(() => {
        const fightersArray = [];
        const fighters = Array.from(
          document.querySelectorAll(".c-listing-athlete-flipcard__front"),
        );

        fighters.forEach((element) => {
          const fightersObject = {
            imgSrc:
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

      // Loop through each fighter to navigate to their profile page and scrape data
      for (const fighter of fighterScrape) {
        // Construct the profile URL
        const profileUrl = `/athlete/${fighter.name
          .toLowerCase()
          .replace(/\s/g, "-")}`;

        // Navigate to the fighter's profile page
        await page.goto(`https://www.ufc.com${profileUrl}`, { timeout: 50000 });
        console.log(`Page: ${pageNumber}`);

        // Wait for a brief moment to ensure navigation has completed
        function delay(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

// Usage
        await delay(2000); // Adjust the delay time as needed
        // Scrape data from the profile page
        const fighterData = await page.evaluate(() => {

          // Add your scraping logic for profile data here
          const profileData = {
            POB: document
                .querySelector(".c-bio__row--1col:nth-child(2) .c-bio__text")
                ?.innerText.trim() ?? 'N/A',
            age: document
                .querySelector(".c-bio__row--3col .field--name-age")
                ?.innerText.trim() ?? 'N/A',
            strikeAccuracy: document
                .querySelector(".c-overlap__chart")
                ?.innerText.trim() ?? 'N/A',
            sigStrikesAttempt: document
                .querySelector(".c-overlap__stats-value")
                ?.innerText.trim() ?? 'N/A',
            sigStrikesLandedPM: document
                .querySelector(".c-stat-compare__number")
                ?.innerText.trim() ?? 'N/A',
            sisStrDefense: document
                .querySelector(
                    ".stats-records--two-column:nth-child(4) .c-stat-compare--no-bar",
                )
                ?.innerText.replace(/[^0-9%]/g, "")
                .trim()
                .slice(0, 3) ?? 'N/A',
            // takedownDefence: document
            //     .querySelector(
            //         ".stats-records--two-column:nth-child(4) .c-stat-compare--no-bar",
            //     )
            //     ?.innerText.replace(/[^0-9%]/g, "")
            //     .trim()
            //     .slice(3, 6) ?? 'N/A',
            // takedownAccuracy: document.querySelector(
            //     ".stats-records:nth-child(2) .c-overlap__chart",
            // )?.innerText ?? 'N/A',
            // takedownsLanded: document.querySelector(
            //     ".stats-records:nth-child(2) .c-overlap__stats-value",
            // )?.innerText ?? 'N/A',
            // takeDownsAttempted: document
            //     .querySelector(
            //         ".stats-records:nth-child(2) .c-overlap__stats-wrap dl:nth-child(2) dd  ",
            //     )
            //     ?.innerText.trim() ?? 'N/A',
            //
            averageFightTime: document
                .querySelector(
                    ".stats-records--two-column:nth-child(4) div:nth-child(1) .c-stat-compare--no-bar:nth-child(3) .c-stat-compare__group-2 .c-stat-compare__number ",
                )
                ?.innerText.trim() ?? 'N/A',
            // winByKO_TKO: document
            //     .querySelector(".c-stat-3bar--no-chart")
            //     ?.innerText.trim() ?? 'N/A',
            // winByDec: document
            //     .querySelector(
            //         ".stats-records:nth-child(7) .c-stat-3bar__group:nth-child(2) .c-stat-3bar__value ",
            //     )
            //     ?.innerText.trim() ?? 'N/A',
            // winBySub: document
            //     .querySelector(
            //         ".stats-records:nth-child(7) .c-stat-3bar__group:nth-child(3) .c-stat-3bar__value ",
            //     )
            //     ?.innerText.trim() ?? 'N/A',
            SpecialStatsOne: document
                .querySelector(".stats-records--one-column .athlete-stats__stat")
                ?.innerText.replace(/\s+/g, ' ').trim() ?? 'N/A',
            SpecialStatTwo: document
                .querySelector(".stats-records--one-column .athlete-stats__stat:nth-child(2)")
                ?.innerText.replace(/\s+/g, ' ').trim() ?? 'N/A',




          };

          return profileData;
        });

        // Combine the scraped profile data with basic fighter info
        const combinedData = { ...fighter, ...fighterData };
        console.log("Combined Fighter Data:", combinedData);
        ufcScrapedRosterArray.push(combinedData);

        // Go back to the previous page
        await page.goBack();
      }

      // Write the data to a file after scraping each page
      await fs.writeFile(
        `pageData.json`,
        JSON.stringify(ufcScrapedRosterArray),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Data of Page ${pageNumber} Scraped`);
          }
        },
      );
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
};

main();
