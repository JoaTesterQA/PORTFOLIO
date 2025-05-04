

describe ('Pruebas de validacion pagina de inicio', function (){
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
  })

    it ('Validacion de logo superior', function (){
      cy.get('.orangehrm-login-logo > img').should('be.visible') 
    })

  it ('Validacion campo username existe', function (){
    cy.get(':nth-child(2) > ').should('be.visible')
  })
  it('Validacion del texto del footer', function (){
    cy.get('.orangehrm-copyright-wrapper >').contains('OrangeHRM')
  })
  it('Validacion del boton login es visible', function (){
    cy.get('.oxd-button').should('be.visible')
  })
      
it("Validacion header", function(){
  cy.get('.oxd-button').click()
  cy.get('.oxd-userdropdown-img').should('be.visible')
})

it("Validar secciones", function(){
  cy.get('.oxd-button').click()
  cy.get(':nth-child(4) > .oxd-main-menu-item').type('.oxd-label')
  cy.get('.oxd-autocomplete-text-input > input').type('TestingData1 Test1 A')
  cy.get('.oxd-form-actions > .oxd-button').click()
})

})
  