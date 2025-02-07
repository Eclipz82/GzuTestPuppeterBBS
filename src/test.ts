import puppeteer from "puppeteer";

(async function createRikojumi() {
    const username = "0720SP_admin";
    const password = "8056bKyRo";
    const url = `http://${username}:${password}@bbsproduct05.bbsolutions.lv`;
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    async function GotositesUzdevumi() {
        const urlUzdevumi = "https://bbsproduct05.bbsolutions.lv/sites/uzdevumi/default.aspx";
        await page.goto(urlUzdevumi);
        
    }

    try {
    await page.goto(url);
    
    const urlRikojumi = "https://bbsproduct05.bbsolutions.lv/sites/lietvediba/Lists/Rikojumi/AllItems.aspx";
    await page.goto(urlRikojumi);
    
    // Селекторы
    const buttonJaunsVienums = "#idHomePageNewItem";
    const fieldUznemums = '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > div > span > div > div.sv-control.svelte-1kcptsp > div.sv-content.sv-input-row.svelte-1kcptsp';
    const holdingHeadquaterSelector = '[title="Holding Headquater"]';
    const fieldLietasIndekss = '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(2) > div > div.field-card__inner.svelte-fmmd3u > div > span:nth-child(1) > span > div > div > div.sv-content.sv-input-row.svelte-1kcptsp';
    const lietasIndekssSelector = '[title="1.1.1 IJU Test (2024)"]';
    const fieldDokumentaPiejamiba = '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(4) > div > div.field-card__inner.svelte-fmmd3u > select';
    const fieldPar = '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(2) > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > input[type=text]';
    const buttonGenerateDokumentu = '#stickRibbon > div.left-nav > div > button';
    const fieldParakstisanasVeids = '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > select';
    const fieldIzstradatajs = '#BBS_WF_ResponsiblePerson_8898caa6-cdd6-4cb8-8f28-b8fcc81f11f6_\\$ClientPeoplePicker';
    const executionPickerSelector = '#BBS_ResponsibleForExecution_7f86d46d-1cdc-497e-a4fa-7facda65ad9e_\\$ClientPeoplePicker';
    const checkboxSelector = '#ft-id-1 > li:nth-child(1) > span > span.fancytree-checkbox > input';
    const startButtonSelector = '#stickRibbon > div.right-nav > div:nth-child(1) > button';
    const fieldPievienotSaskanotaji = '#taskAssignments > form:nth-child(2) > div.d-grid-flex.w-100.svelte-vu5koa > div.d-grid-flex.d-grid-flex-column.w-90.svelte-vu5koa > div.d-grid-flex.grid-cell.svelte-vu5koa > div:nth-child(2) > div > div > div.sv-control.svelte-1kcptsp > div.sv-content.sv-input-row.svelte-1kcptsp > input';
    const buttonDelete = '#taskAssignments > div:nth-child(5) > div > div.w-5.svelte-13stre5 > img'
    const buttonNosutit = '#stickRibbon > div.right-nav > div:nth-child(2) > button'
    const sitesActionMenu = '#zz11_SiteActionsMenu_t'
    const vietnesSaturs = '#mp1_0_5_Anchor'

    // Переход по селекторам и действия
    // await page.waitForSelector(buttonJaunsVienums);
    // await page.click(buttonJaunsVienums);

    // await page.waitForSelector(fieldUznemums);
    // await page.click(fieldUznemums);

    // await page.waitForSelector(holdingHeadquaterSelector);
    // await page.click(holdingHeadquaterSelector);

    // await page.waitForSelector(fieldLietasIndekss);
    // await page.click(fieldLietasIndekss);

    // await page.waitForSelector(lietasIndekssSelector);
    // await page.click(lietasIndekssSelector);

    // await page.waitForSelector(fieldDokumentaPiejamiba);
    // await page.click(fieldDokumentaPiejamiba);
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");

    // await page.waitForSelector(fieldPar);
    // await page.type(fieldPar, "Test");

    // await page.click(buttonGenerateDokumentu);

    // await new Promise(resolve => setTimeout(resolve, 5000));

    // await page.waitForSelector(fieldParakstisanasVeids);
    // await page.click(fieldParakstisanasVeids);
    // await page.keyboard.press("ArrowDown");
    // await page.keyboard.press("Enter");

    // await page.waitForSelector(fieldIzstradatajs);
    // await page.click(fieldIzstradatajs);
    // await page.keyboard.press('Backspace');
    // await page.type(fieldIzstradatajs, 'Regular Clerk 1');
    // await page.keyboard.press("Tab");
    // await page.keyboard.press("Enter");

    // await page.click(executionPickerSelector);
    // await page.type(executionPickerSelector, 'Regular Clerk 1');
    // await page.keyboard.press("Tab");
    // await page.keyboard.press("Enter");

    // await new Promise(resolve => setTimeout(resolve, 5000));

    // await page.waitForSelector(checkboxSelector);
    // await page.click(checkboxSelector);

    // await page.waitForSelector(startButtonSelector);
    // await page.click(startButtonSelector);

    // await page.click(buttonDelete)
    // await page.click(buttonDelete)
    // await page.click(buttonDelete)
  
    // await page.waitForSelector(fieldPievienotSaskanotaji)
    // await page.type(fieldPievienotSaskanotaji, 'Regular clerk 1')
    // await page.keyboard.press("Enter");
    // await page.keyboard.press("Enter");
   
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // // await page.click(buttonNosutit)
    // await new Promise(resolve => setTimeout(resolve, 5000));

    await GotositesUzdevumi();
    await page.waitForSelector(sitesActionMenu)
    await page.click(sitesActionMenu)
    await page.waitForSelector(vietnesSaturs)
    await page.click(vietnesSaturs)
} catch (error) {
    console.error("Find :", error);
} finally {
    // await browser.close();
    console.log("Browser is closed");
}

})();

