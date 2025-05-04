describe ("Pruebas-web buggy cars", function (){
   
 beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://buggy.justtestit.org/")

     })


    it("Validacion popular make", function(){
        cy.get(":nth-child(1) >").contains("Popular")

    })
    
    it("Validar secciones",function(){
       cy.get('nth').find('child').should('have.length', 3)

    })







})