import puppeteer from "puppeteer";

(async function GotositesUzdevumi() {
    const username = "0720SP_admin";
    const password = "8056bKyRo";
    // const url = `http://${username}:${password}@bbsproduct05.bbsolutions.lv`;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.authenticate({ username, password });

    try {
        // Селекторы
        const sitesActionMenu = '#zz11_SiteActionsMenu_t'
        const vietnesSaturs = '#mp1_0_5_Anchor'


        const urlUzdevumi = "https://bbsproduct05.bbsolutions.lv/sites/uzdevumi/default.aspx";
        await page.goto(urlUzdevumi);
        await page.waitForSelector(sitesActionMenu)
        await page.click(sitesActionMenu)
        await page.waitForSelector(vietnesSaturs)
        await page.click(vietnesSaturs)
       
    } catch (error) {
        console.error("Ошибка:", error);
    } finally {
        // await browser.close();
        console.log("Браузер закрыт");
    }
})();