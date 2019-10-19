const {Given, When } =  require('cucumber') // importo Given y When

Given('estoy probando', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.browser.newPage()
  });