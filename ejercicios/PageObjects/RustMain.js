const selectors= {
botonGetStarted: ".buton.buton-download.ph4.mt0.w-0"
}
class MiPagina {
    constructor (){
        this.url='https://www.rust-lang.org/'
        this.pagina=null
    }
    async get(browser){
        this.pagina=await browser.newPage()
        await this.pagina.goto(this.url)
    }
   async click(){
        await this.pagina.click(selectors.botonGetStarted)

    }

}
module.exports=MiPagina
