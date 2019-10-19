const { Given, When } = require('cucumber') // importo Given y When
const RustMain = require('./RustMain.js')

Given('accedo a la pagina de rust', async function () {
    // Write code here that turns the phrase above into concrete actions
    this.mipagina = new RustMain()
    await this.mipagina.get(this.browser)
});

When('clickeo web started', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.mipagina.started()   
});

When('imprimo redes sociales', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.mipagina.printLink()   
});

