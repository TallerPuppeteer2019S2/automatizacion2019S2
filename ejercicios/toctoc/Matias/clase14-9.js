(async () => {
    const puppeteer = require('puppeteer')

    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    
    let selector = {
        txtPaquetes: '#linkPackagesLayoutFooter',
        btnBuscar: '#package-search form input',
        btnConsultar: '#linkReservePackagePackagesDetails',
        fecha: '#inputExpectedDeparturePackagesDetails',
        nombre: '#firstName_pay_',
        apellido: '#inputLastNamePackagesPaymentOwner',
        telefono: '#phonenumber_pay_',
        email: '#email_pay_',
        btnCotizar: '#buttonConfirmPackagesPaymentType',
        txt: null
    }
    
    let txtAComparar = '¡Hemos recibido tu petición con éxito!'
  


    await miPagina.goto('https://www.toctocviajes.com/', { waitUntil: 'load' })
    

    await miPagina.click(selector.txtPaquetes)
    await miPagina.waitForSelector(selector.btnBuscar)
    await miPagina.click(selector.btnBuscar)

    await miPagina.waitForSelector('.cont-paquetes')
    let paquete = (await miPagina.$$('.row'))[6]
    await paquete.click()

    await miPagina.waitForSelector('#linkReservePackagePackagesDetails')
    let precio = (await miPagina.$$('.text-right'))[0]
    let txtPrecio = (await precio.$$('span'))[1]
   // let spanPrecio = (await precio.evaluate(() => document.querySelectorAll('span')[1].innerText));
    
    
    
    const spanPrecio = (await txtPrecio.getProperty('innerText'))
    
    console.log(spanPrecio)
    await miPagina.type(selector.fecha, '10/10/2019')
    await miPagina.click(selector.btnConsultar)

    await miPagina.waitForSelector(selector.nombre)
    await miPagina.type(selector.nombre, 'Matias')
    await miPagina.type(selector.apellido, 'Duarte')
    await miPagina.type(selector.telefono, '22112232')
    await miPagina.type(selector.email, 'email@gmail.com')
    
    let a = (await miPagina.$$('.row'))[7]
    let checkBox = (await a.$("div p label input"))
    await checkBox.click()
    await miPagina.click(selector.btnCotizar)
    
    await miPagina.waitForSelector('#confirmacionTarjeta')
    let divConfirmacion = (await miPagina.$$('#confirmacionTarjeta div'))[2]
    let txtConfirmacion = (await divConfirmacion.$('h3'))
    
    
    if (txtConfirmacion == txtAComparar) {
        console.log('el texto es el correcto --> ' + txtConfirmacion)
     }
    
 

 })()