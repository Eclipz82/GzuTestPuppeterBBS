import puppeteer from "puppeteer";

(async function acceptTask() {
    const username = "0720_clerk1@bbsolutions.lv";
    const password = "123!@#qwe";
    const url = `https://bbsproduct05.bbsolutions.lv/`;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.authenticate({ username, password });

    try {

         // Селекторы
    const buttonShowTask = "#s4-titlerow > div.mdl-layout__header-row > div:nth-child(7)";
        // Переход к URL
        await page.goto(url);
        await page.waitForSelector(buttonShowTask)
        await page.click(buttonShowTask)
    } catch (error) {
        console.error("Ошибка:", error);
    } finally {
        // await browser.close();
        console.log("Браузер закрыт");
    }
})();
