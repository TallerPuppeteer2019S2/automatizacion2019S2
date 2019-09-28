
(async () => {
   const puppeteer = require('puppeteer')
    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    await miPagina.goto('https://www.toctocviajes.com', { waitUntil: 'load'})

    await miPagina.waitForSelector('#linkPackagesLayoutFooter')
    await miPagina.click('#linkPackagesLayoutFooter')
 
    await miPagina.evaluate(()=> { document.querySelectorAll('.btn.big.btn-search')[3].click(); } );
 /*
    let botones = await miPagina.$$('selecitr')
    let mibotondeverdad = botones[3]
    await mibotondeverdad.click()//

    await miPagina.waitForSelector('.btn.big.btn-search')
    await miPagina.click('.btn.big.btn-search')
    */


 
        


})()
