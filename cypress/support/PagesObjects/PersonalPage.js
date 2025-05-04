class PersonalPage {

    ClickearPrimerEquipo() {
        cy.get('[href="/tablets/tcl/tablet-tcl-nxtpaper-14-funda-teclado-pen/f"] > .emsye88y > .emsye89h').click()
    }

    IngresarCP() {
        cy.get('.emsye84n').type('1763')
    }

    ValidarEnvio() {
        cy.contains('Envío a CP1763').should('be.visible')
    }

    FiltroMarcas() {
        cy.get('._1qzmwzwbv > ._1qzmwzwcn > ._2oahu71 > ._2oahu7r > :nth-child(4) > ._1qzmwzwcm > ._2oahu74 > .fal').click()
    }

    MarcaSamsung() {
        cy.get('[data-testid="filtro-samsung"] > ._1qzmwzwcq > :nth-child(2) > #checkbox').check()
    }

    ValidarMarcas() {
        cy.contains('Notebooks y tablets Samsung').should('be.visible')
    }

    FiltroPrecios() {
        cy.get('._1qzmwzwbv > ._1qzmwzwcn > ._2oahu71 > ._2oahu7r > :nth-child(6) > ._1qzmwzwcm > ._2oahu74 > .fal').click()
    }
    
    PrecioMinimo() {
        cy.get('[data-test-id="inputPriceFrom"]').type('4.000.000', { force: true })
    }

    PrecioMayor() {
        cy.get('[data-test-id="inputPriceTo"]').type('4.000.000', { force: true })
    }

    Enter() {
        cy.get('[data-test-id="inputPriceTo"]').type('{enter}', { force: true })
    }

    ValidarProductos() {
        cy.contains('No se encontraron productos').should('be.visible')
    }
}
export default PersonalPage