import Libro from "../support/pages/Libro";
describe ('Validación pagina de inicio', function (){
        beforeEach(() => {
                cy.visit("https://bookcart.azurewebsites.net/")
        })
        it ('CP001-Validar-busqueda-libros',function(){
                cy.get('.mat-mdc-autocomplete-trigger').type('Harry Potter')
                cy.get('#mat-option-0 > .mdc-list-item__primary-text').click()
        })

        it ('CP002-Validar-agregar a carrito-libro',function(){
                cy.get(':nth-child(2) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > .card-title > a > strong').click()
                cy.get('div > app-addtocart > .mdc-button > .mdc-button__label').click()
                cy.get('.mdc-icon-button > .mat-icon').click()   
        })

        it ('CP003-Validar-registrar-usuario',function(){
                cy.login('Alan', 'Moreira', 'alantesting', '12345Testing', '12345Testing')
                cy.fixture('login').then((login)=>{
                })
        })
        
        it ('CP004-Validar-categorias-biografias-primeroDeLaLista',function(){
                cy.get(':nth-child(2) > .mdc-list-item__content').click()
                cy.get(':nth-child(1) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > .card-title > a > strong').click()
        })
        
})