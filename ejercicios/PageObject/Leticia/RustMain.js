const selectors = {
	botonGetStarted:'href="/learn/get-started'
	}
	class MiPagina{
		constructor(){
	this.url='https://www.rust-lang.org/'
	this.pagina = null
		}
	async get (browser){
	
	this.pagina=await browser.newPage()
	await this.pagina.goto(this.url)
	}
	async clickear(){
		await this.pagina.clickear(selectors.botonGetStarted)
	}
}
module.exports=MiPagina


