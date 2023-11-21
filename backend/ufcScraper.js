import puppeteer from "puppeteer"

async function scrapeUFCPage(pageNumber) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    // Starts
    await page.goto(`https://www.ufc.com/athletes/all?filters%5B0%5D=status%3A23&gender=All&search=&page=${pageNumber}`);

    // Wait for the content to load (you may need to adjust the selector based on the page structure)
    await page.waitForSelector('.view-athletes');

    // Extract data
    const scrapedData = await page.evaluate(() => {
        const fighterArray = [];

        // Example: Extracting athlete names
        const athleteElements = document.querySelectorAll('.views-field-title .field-content');
        athleteElements.forEach((athleteElement) => {
            const name = athleteElement.textContent.trim();
            fighterArray.push({ name });
        });

        // You can add more logic here to extract other data like weight class, record, etc.

        return fighterArray;
    });

    // Print the scraped data (you might want to save it to a file instead)
    console.log(scrapedData);

    // Close the browser
    await browser.close();
}

// Run the function with a specific page number
scrapeUFCPage(86);
