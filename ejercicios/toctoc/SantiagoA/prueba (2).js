(async () => {
    const puppeteer = require('puppeteer')

    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    await miPagina.goto('https://www.mercadolibre.com.uy/', { waitUntil: 'load' })
    await miPagina.waitForSelector('.nav-header-menu-wrapper label')
    await miPagina.click('.nav-header-menu-wrapper label')
    await miPagina.waitForSelector('.nav-icon-history-mobile')
    await miPagina.click('.nav-icon-history-mobile')
})()