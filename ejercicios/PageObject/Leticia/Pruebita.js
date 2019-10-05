(async () => {
	const MiPagina=require('./RustMain.js')
	const puppeteer=require ('puppeteer')

let miNavegador= await puppeteer.launch({headless: false})
let miPagina = new MiPagina()
await miPagina.get(miNavegador)
await miPagina.clickear()

})()