(async () => {
    const puppeteer = require('puppeteer')
    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    await miPagina.goto('https://www.mercadolibre.com.uy', { waitUntil: 'load'})
    await miPagina.waitForSelector('.hamburger-top-bread')
    await miPagina.click('.hamburger-top-bread')
    /*
    await miPagina.waitForSelector('.nav-mobile-button.nav-mobile-button-filled')
    await miPagina.click('.nav-mobile-button.nav-mobile-button-filled')
    await miPagina.waitForSelector('#user_id')
    await miPagina.type('#user_id', 'leticia.setaro@gmail.com')
    await miPagina.click('.ui-button.ui-button--primary.auth-button.auth-button--user')
    await miPagina.waitForSelector('#password')
    await miPagina.type ('#password', '1234')
    await miPagina.click('.ui-button ui-button--primary.auth-button.auth-button--password')
    */
   await miPagina.waitForSelector('.nav-icon-categories-mobile')
    await miPagina.click('.nav-icon-categories-mobile')
    
    let elBotonCorralito = (await miPagina.$$('el selector'))[81]
    await elBotonC9orralito.click()

    

 
 
     
     
 
 })()