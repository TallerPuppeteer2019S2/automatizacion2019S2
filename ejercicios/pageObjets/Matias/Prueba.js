(async () => {


const MiPagina = require('./RustMain.js')

const puppeteer = require('puppeteer')

let miPagina = new MiPagina()
let miNavegador = await puppeteer.launch({headless: false})

await miPagina.get(miNavegador)
await miPagina.started()
    

})()