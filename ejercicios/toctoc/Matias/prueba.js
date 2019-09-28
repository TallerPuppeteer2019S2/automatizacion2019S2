(async () => {
    const puppeteer = require('puppeteer')

    let miNavegador = await puppeteer.launch({headless: false})
    let miPagina = await miNavegador.newPage()
    
    let selector = {
        txtPaquetes: '#linkPackagesLayoutFooter',
        btnBuscar: '#package-search form input',
        btnConsultar: '.btn.big.btn-warning.ladda-button',
        fecha: '#·firstName_pay_',
        nombre: 'firstName_pay_',
        apellido: '#inputLastNamePackagesPaymentOwner',
        telefono: '#phonenumber_pay_',
        email: '#email_pay_',
        checkBox: 'ng-valid ng-dirty ng-valid-parse ng-touched',
        btnCotizar: '#buttonConfirmPackagesPaymentType',
        txtAComparar: '¡Hemos recibido tu petición con éxito!'
    }
    
    let paquete = (await miPagina.$$('.row'))[15]
    let primerPrecio = (await miPagina.$$('.text-right'))[0]
    let txtPrecio = (await miPagina.$eval(primerPrecio))
    let divConfirmacion = (await miPagina.$$('#confirmacionTarjeta div'))[2]
    let txtConfirmacion = (await divConfirmacion.$('h3'))


    await miPagina.goto('https://www.toctocviajes.com/', { waitUntil: 'load' })
    

    await miPagina.click(selector.txtPaquetes)
    await miPagina.waitForSelector(selector.btnBuscar)
    await miPagina.click(selector.btnBuscar)
    await miPagina.waitForSelector('container-fluid fondoResultados')
    await miPagina.click(paquete)
    console.log(txtPrecio)
    await miPagina.type(selector.fecha, '10/10/2019')
    await miPagina.click(btnConsultar)
    await miPagina.waitForSelector(selector.nombre)
    await miPagina.type(selector.nombre, 'Matias')
    await miPagina.type(selector.apellido, 'Duarte')
    await miPagina.type(selector.telefono, '22112232')
    await miPagina.type(selector.email, 'email@gmail.com')
    await miPagina.click(selector.checkBox)
    await miPagina.click(selector.btnCotizar)
    await miPagina.waitForSelector('.confirmacionTarjeta')
    
    if (txtCinfirmacion == txtAComparar) {
        console.log('el texto es el correcto' + txtConfirmacion)
      }
    

    





    

    

 })()