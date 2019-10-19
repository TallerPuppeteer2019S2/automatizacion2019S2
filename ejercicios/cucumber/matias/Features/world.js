const { setWorldConstructor } = require('cucumber')

const puppeteer = require('puppeteer')// importar puppeteer

const World = function( {attach, parameters }){
this.driver = puppeteer
}

setWorldConstructor(World)