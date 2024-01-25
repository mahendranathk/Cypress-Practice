// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';

import 'cypress-file-upload';



Cypress.Commands.add('getIframe',(iframe)=>{

   return cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)
})

Cypress.Commands.add('clickLink', (label) => 
{ 
   cy.get('a').contains(label).click()

})

Cypress.Commands.add('loginApp', (email,password) => 
{ 
   cy.get('input[class="email"]').type(email)
   cy.get('input[class="password"]').type(password)
   cy.get('.button-1.login-button').click()

})
