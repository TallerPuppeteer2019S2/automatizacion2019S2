
(async () => {
   const puppeteer = require('puppeteer')
    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    await miPagina.goto('https://www.toctocviajes.com', { waitUntil: 'load'})

    await miPagina.waitForSelector('#linkPackagesLayoutFooter')
    await miPagina.click('#linkPackagesLayoutFooter')
 
    await miPagina.evaluate(()=> { document.querySelectorAll('.btn.big.btn-search')[3].click(); } );
 /* forma idem de hacer lo de la línea 11:
    await miPagina.waitForSelector('.btn.big.btn-search')
    let botones = await miPagina.$$('.btn.big.btn-search')
    let mibotondeverdad = botones[3]
    await mibotondeverdad.click() 
    */

   
    /* probar hacer esto pero con sugerencia de Matías de linea 12:
   await miPagina.evaluate(()=> { document.querySelectorAll('h4')[11].click(); } );
    */

    /*await miPagina.waitForSelector('h4')
    let botones = await miPagina.$$('h4')
    let mibotondeverdad = botones[11]
    await mibotondeverdad.click() */

    await miPagina.evaluate(()=> { document.querySelectorAll('h4')[11].click(); } );
 
        


})()
