import PersonalPage from "../support/PagesObjects/PersonalPage";

const personalPage = new PersonalPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ('TIENDA PERSONAL', function (){

    beforeEach(() => {
        cy.visit("https://tienda.personal.com.ar/tablets")
    })

    it ('CP001 - Validar costo de envió - En equipo primero de la lista',function(){
        personalPage.ClickearPrimerEquipo()
        personalPage.IngresarCP('1763')
        personalPage.ValidarEnvio()

        /* En este caso buscamos en el DOM el primer equipo e ingresamos el codigo postal que nos indique el costo de envio*/
    })

    it ('CP002 - Validar filtros - Marca Samsung ',function(){
        personalPage.FiltroMarcas()
        personalPage.MarcaSamsung()
        personalPage.ValidarMarcas()

        /* En este segundo caso filtramos en el apartado MARCAS y seleccionamos la MARCA Samsung y luego verificamos los productos que aparecen de la marca seleccionada*/
    })

    it ('CP003 - Validar - Precio mayor $4.000.000-apartado Precios',function(){
        personalPage.FiltroPrecios()
        personalPage.PrecioMinimo('4.000.000', { force: true })
        personalPage.PrecioMayor('4.000.000', { force: true })
        personalPage.Enter('{enter}', { force: true })
        personalPage.ValidarProductos()

        /* En el tercer caso Filtramos en el apartado PRECIOS ingresamos en el precio minimo y maximo un valor elevado, para que no aparezcan productos de ese precio*/
    })

    it ('CP004 - Validar agregar al carrito - Equipo GALAXY TAB A9',function(){
        cy.get('[href="/tablets/samsung/tablet-samsung-galaxy-tab-a9/f"] > .emsye88y > .emsye89h').click()
        cy.get('.l0q4lv55').click()
        cy.get('[data-testid="shopping-cart-icon"] > .fa-light').click()
        cy.contains('Carrito de compras').should('be.visible')
        
        /* En el cuarto caso elegimos el equipo GALAXY TAB A9 y lo agregamos al carrito*/
    })
})