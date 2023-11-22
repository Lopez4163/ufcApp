import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const jsonFilePath = "fighters.json";

  for (let pageNumber = 1; pageNumber <= 87; pageNumber++) {
    await page.goto(
      `https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=${pageNumber}`,
      { timeout: 50000 },
    );

    const fighterScrape = await page.evaluate(() => {
      let jsonFighterRoster;
      const fightersArray = [];
      const fighters = Array.from(
        document.querySelectorAll(".c-listing-athlete-flipcard__front"),
      );

      fighters.forEach((element) => {
        const fightersObject = {
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
        jsonFighterRoster = JSON.stringify(fightersObject);
      });

      return fightersArray;
    });

    console.log(`Page ${pageNumber} Fighters:`, fighterScrape);
  }

  await browser.close();
};

main();
