import puppeteer from "puppeteer";
import { createLogger } from "vite";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=1",
    { timeout: 50000 },
  );

  const fighterScrape = await page.evaluate(() => {
    const fightersArray = [];
    const fighters = Array.from(
      document.querySelectorAll(".c-listing-athlete-flipcard__front"),
    );
    fighters.forEach((element) => {
      imgSrc =
        element
          .querySelector(".c-listing-athlete__thumbnail img")
          ?.getAttribute("src") || "";
      let name = element
        .querySelector(".c-listing-athlete__name")
        .textContent.trim();
      let nickname = element
        .querySelector(".c-listing-athlete__nickname")
        .textContent.trim();
      let weight_Class = element
        .querySelector(".c-listing-athlete__title .field__item")
        .textContent.trim();
      let record = element
        .querySelector(".c-listing-athlete__record")
        .textContent.trim();
      if (nickname === "") {
        nickname += "No Nickname";
      }
      fightersArray.push(imgSrc, name, nickname, weight_Class, record);
    });
    return fightersArray;
  });
  console.log(fighterScrape);
};
main();
