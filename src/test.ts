import puppeteer from "puppeteer";

(async function createRikojumi() {
    const username = "0720SP_admin";
    const password = "8056bKyRo";
    const url = `http://${username}:${password}@bbsproduct05.bbsolutions.lv`;
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

     try {
    await page.goto(url);
    
    const urlRikojumi = "https://bbsproduct05.bbsolutions.lv/sites/lietvediba/Lists/Rikojumi/AllItems.aspx";
    await page.goto(urlRikojumi);
    
    // Селекторы
    const requiredMark = {
        uznemums: "#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(1) > div > div.ms-h3.ms-standardheader > span",
        lietasIndekss : '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(2) > div > div.ms-h3.ms-standardheader > span',
        dokumetaPieejamiba: '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(3) > div > div.ms-h3.ms-standardheader > span',
        atzimeParPersonamDarbiem: '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(4) > div > div.ms-h3.ms-standardheader > span',
        par: '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(2) > div:nth-child(1) > div > div.ms-h3.ms-standardheader > span',
        parakstisanasVeids: '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div > div.ms-h3.ms-standardheader > span',
        izstradatajs: '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div.ms-h3.ms-standardheader > span',
        atbildigaisParPersonamDatiem: '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div.ms-h3.ms-standardheader > span',
    };
    const errorSelectors = {
        uznemums: "#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > span",
        lietasIndekss: '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(2) > div > div.field-card__inner.svelte-fmmd3u > span',
        atzimeParPersonasDatiem: '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(4) > div > div.field-card__inner.svelte-fmmd3u > span',
        par: "#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(2) > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > span",
        parakstisanaVeids: '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(2) > div > div > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > span',
        atbildigaisParRikojumuIzpildi: '#wrapper > div.container-fluid > div:nth-child(1) > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div.field-card__inner.svelte-fmmd3u > div > div > span > span'

    };
    const errorSelectorPAR = "#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(2) > div:nth-child(1) > div > div.field-card__inner.svelte-fmmd3u > span";
    const buttonSaglabat = '#stickRibbon > div.right-nav > div:nth-child(5) > button';
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
    const fieldUznemumsAsterisk = '#wrapper > div.container-fluid > div:nth-child(1) > div.col-sm-12.col-md-12.col-lg-6 > div > div:nth-child(1) > div:nth-child(1) > div > div.ms-h3.ms-standardheader > span';
 

    // Переход по селекторам и действия
    await page.waitForSelector(buttonJaunsVienums);
    await page.click(buttonJaunsVienums);
    for (const [field, selector] of Object.entries(requiredMark)) {
        try {
            await page.waitForSelector(selector, { timeout: 5000 });
            const requiredSymbol = await page.$eval(selector, el => el.textContent?.trim());
            console.log(`required mark"${field}":`, requiredSymbol);
        } catch (error) {
            console.log(`required mark "${field}" doesn't appear`);
        }
    }
    await page.waitForSelector(buttonGenerateDokumentu);
    await page.click(buttonGenerateDokumentu);
    try {
        await page.waitForSelector(errorSelectorPAR, { timeout: 5000 }); 
        const errorText = await page.$eval(errorSelectorPAR, el => el.textContent?.trim());
        console.log("Ошибка найдена:", errorText);
    } catch (error) {
        console.log("Ошибка не появилась");
    }
    await page.waitForSelector(buttonSaglabat);
    await page.click(buttonSaglabat);
    for (const [field, selector] of Object.entries(errorSelectors)) {
        try {
            await page.waitForSelector(selector, { timeout: 5000 });
            const errorText = await page.$eval(selector, el => el.textContent?.trim());
            console.log(`Ошибка в поле "${field}":`, errorText);
        } catch (error) {
            console.log(`Ошибка в поле "${field}" не появилась`);
        }
    }
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // await page.waitForSelector(fieldUznemums);
    // await page.click(fieldUznemums);

    //         // Проверяем, что у поля Uznemums есть звездочка (*), обозначающая обязательность
    //         await page.waitForSelector(fieldUznemumsAsterisk);
    //         const labelText: string = await page.$eval(fieldUznemumsAsterisk, (el) => el?.textContent?.trim() || "");

    //         if (!labelText.includes('*')) {
    //             throw new Error("Ошибка: Поле 'Uznemums' должно быть обязательным, но отсутствует звездочка (*).");
    //         }

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


} catch (error) {
    console.error("Find :", error);
} finally {
    await browser.close();
    console.log("Browser is closed");
}

})();

