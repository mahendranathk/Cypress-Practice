describe('Test Suite1', () => {

    it('Radio button', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //visibility of radio buttons
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        //selecting the radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        

        
        

      
      
    })


    it.only('Check box', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // //visibility of the element
        // cy.get('input#monday').should('be.visible')

        // //select single checkbox
        // cy.get('input#monday').check().should('be.checked')

        // //unselect checkbox
        // cy.get('input#monday').uncheck().should('not.be.checked')

        // //select all the checkboxes
        // cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')
        // cy.get('.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        cy.get('.form-check-input[type="checkbox"]').eq(4).check().should('be.checked')
        //cy.get('.form-check-input[type="checkbox"]').last().check().should('be.checked')

        

    
        

        

        

      
      
    })
    
  
    
  
  })
  
  