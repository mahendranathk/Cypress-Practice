describe('Test Suite1', () => {

    it('Navigation', () => {

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')

        cy.get('.ico-register').contains('Register').click()
        cy.title().should('eq','nopCommerce demo store. Register') //Register Page

        // cy.go('back')
        // cy.title().should('eq','nopCommerce demo store') //Home Page

        // cy.go('forward')
        // cy.title().should('eq','nopCommerce demo store. Register')

        cy.go(-1)  //back
        cy.title().should('eq','nopCommerce demo store') //Home Page

        cy.go(1) //forward
        cy.title().should('eq','nopCommerce demo store. Register') //Register Page

        cy.reload()







    })
  
    
  
  })
  
  