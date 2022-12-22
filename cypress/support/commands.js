/// <reference types="cypress" />

Cypress.Commands.add('validateToastMessage', msg => {
    cy.log(`O sistema deve apresentar a mensagem: ${msg}`)
    cy.contains('.toast-message', msg, { timeout: 30000 })
})
