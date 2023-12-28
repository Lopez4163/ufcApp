// const puppeteer = require('puppeteer');
//
// async function scrapeFighterData() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });
//
//   try {
//     // Navigate to the initial page
//     await page.goto('https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23');
//
//     // Wait for the fighter list to load (you might need a more reliable selector)
//     const firstFighterSelector = '.c-listing-athlete-flipcard__action a';
//     await page.waitForSelector(firstFighterSelector, { visible: true });
//
//     // Click on the "View Profile" button for the first fighter
//     await page.evaluate((selector) => {
//       const firstFighterLink = document.querySelector(selector);
//       if (firstFighterLink) {
//         firstFighterLink.click();
//       }
//     }, firstFighterSelector);
//
//     // Wait for the navigation to complete (you might need a more reliable selector)
//     await page.waitForNavigation();
//
//     // Scrape data from the profile page
//     const fighterData = await page.evaluate(() => {
//       const profileSection = document.querySelector('.l-container__content');
//
//       if (!profileSection) {
//         return null; // Return null or handle the case where the selector doesn't match
//       }
//
//       // const profileData = {
//       //   // ...fighter personal data
//       //   fighterName: document.querySelector('.l-page__content .hero-profile__name ').innerText,
//       //   POB: document.querySelector('.c-bio__row--1col:nth-child(2) .c-bio__text').innerText.trim(),
//       //   age: document.querySelector('.c-bio__row--3col .field--name-age').innerText.trim(),
//       //
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
//       // };
//       // return profileData;
//     });
//
//     console.log('Fighter Data:', fighterData);
//
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     // Close the browser
//     // await browser.close();
//   }
// }
//
// scrapeFighterData();


const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let ufcScrapedRosterArray = [];

  try {
    // Loop through the roster pages
    for (let pageNumber = 0; pageNumber <= 2; pageNumber++) {
      // Navigate to the roster page
      await page.goto(
          `https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=${pageNumber}`,
          { timeout: 50000 },
      );

      // Scrape fighter data from the roster page
      const fighterScrape = await page.evaluate(() => {
        const fightersArray = [];
        const fighters = Array.from(
            document.querySelectorAll('.c-listing-athlete-flipcard__front'),
        );

        fighters.forEach((element) => {
          const urlElement = element.querySelector('.e-button--black a');
          const fightersObject = {
            imgSrc:
                element
                    .querySelector('.c-listing-athlete__thumbnail img')
                    ?.getAttribute('src') || '',
            name: element.querySelector('.c-listing-athlete__name').textContent.trim(),
            nickname:
                element.querySelector('.c-listing-athlete__nickname').textContent.trim() ||
                'No Nickname',
            weightClass: element
                .querySelector('.c-listing-athlete__title .field__item')
                .textContent.trim(),
            record: element.querySelector('.c-listing-athlete__record').textContent.trim(),
            profileUrl: urlElement.getAttribute('href'),
            };
          fightersArray.push(fightersObject);
        });

        return fightersArray;
      });

      // Loop through each fighter to navigate to their profile page and scrape data
      for (const fighter of fighterScrape) {
        // Navigate to the fighter's profile page
        await page.goto(`https://www.ufc.com${fighter.profileUrl}`, { timeout: 50000 });
        console.log(`Page: ${pageNumber}`)

        // Scrape data from the profile page
        const fighterData = await page.evaluate(() => {
          const profileSection = document.querySelector('.l-container__content');

          if (!profileSection) {
            return null; // Return null or handle the case where the selector doesn't match
          }

          const profileData = {

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
          }
          return profileData;
        });

        // Combine the scraped profile data with basic fighter info
        const combinedData = { ...fighter, ...fighterData };
        console.log('Combined Fighter Data:', combinedData);
        ufcScrapedRosterArray.push(combinedData);
      }

      // Write the data to a file after scraping each page
      await fs.writeFile(`pageData.json`, JSON.stringify(ufcScrapedRosterArray), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Data of Page ${pageNumber} Scraped`);
        }
      });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
};

main();


