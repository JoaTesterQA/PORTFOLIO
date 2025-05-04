class MovistarPage {

    FiltroPrecio() {
        cy.get('.block-subtitle').click() //Clickeamos en el filtro
    }

    Precio() {
        cy.get('#filters-items > :nth-child(2)').click() //Hacemos click en el filtro precio
    }

    ValorPrecio() {
        cy.get('[data-value="300000_600000"] > a').click() //Elegimimos y clickeamos el valor 300k-600k
    }

    FiltroAlmacenamiento() {
        cy.get('.block-subtitle').click() //Clickeamos en el filtro
    }

    Almacenamiento() {
        cy.get('.memory > .filter-title').click() //Hacemos click en el filtro memoria Interna
    }

    Memoria128() {
        cy.get('[data-value="802"] > a').click() //Elegimos y clickeamos la memoria interna de 128gb
    }

    ResultadoFiltro() {
        cy.get('.products > ol').each(($el) => {
            cy.contains('Mostrando 6 equipos')
            cy.wrap($el).invoke('attr', 'style', 'border: 2px solid red;') //Recorremos todos los productos que nos arroga el filtro en el DOM y Validamos que contenga la cantidad de equipos
            //  que nos arroga el filtro y luego agregamos el atributo style para darle un borde de color a los productos que aparecen.
          })
    }

    ScreenshotFiltro() {
        cy.screenshot('productos-con-borde') //Hacemos una captura
    }


    TercerEquipo() {
        cy.get('[data-id="19762"] > a > .product-image-container > .cp-data-container').click() //Clickeamos el tercer equipo de la lista
    }

    MediosDePago() {
        cy.get('#open-installments-modal').click() //Clickeamos en medios de pago
    }

    SelectorBanco() {
        cy.get('#bankSelector').click({force: true}) //clickeamos el desplegable de seleccion de banco
    }

    BancoCredicoop() {
        cy.contains('li.ui-menu-item', 'Credicoop').click({force: true}) //clickeamos y validamos que contenga el banco credicoop
    }

    SelectorTarjeta() {
        cy.get('#cardSelector').click() //clickeamos el desplegable de seleccion de tarjeta    
    }

    TarjetaVisa() {
        cy.get('[data-card="Visa"]').click() //clickeamos la tarjeta VISA
    }

    Cuota() {
        cy.get('#installmentsTable').should('not.contain', '60 cuotas') //Indicamos que no aparecezca 60 cuotas
    }

    Screenshot() {
        cy.screenshot('sin-60-cuotas') //Hacemos una captura
    }

}

export default MovistarPage