
const selectors = {

    btnGetStarted:'.button.button-download.ph4.mt0.w-100'
}
class MiPagina {
    constructor(){
    this.url = 'https://www.rust-lang.org'
    this.pagina = null
    }
    async get(browser){
        this.pagina = await browser.newPage()
        await this.pagina.goto(this.url)
    }
    async started(){
        await this.pagina.waitForSelector(selectors.btnGetStarted)
        await this.pagina.click(selectors.btnGetStarted)
    }   
}

module.exports=MiPagina