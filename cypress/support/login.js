Cypress.Commands.add('login', (name, lastName, user, password, repetPassword)=>{
    cy.fixture('login').then((login)=>{
        cy.get(login.loginButton).click();
        cy.get(login.signUp).click();
        cy.get(login.name).type(name);
        cy.get(login.lastName).type(lastName)
        cy.get(login.user).type(user)
        cy.get(login.password).type(password)
        cy.get(login.repetPassword).type(repetPassword)
        cy.get(login.gender).check()
        cy.get(login.confirm).click()
    })
})