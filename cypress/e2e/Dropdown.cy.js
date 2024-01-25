describe('Test Suite1', () => {

    it.skip('Static Dropdown', () => {

        cy.visit('/')

        cy.get('#zcf_address_country').select('Iceland').should('have.value','Iceland')
        
  
      
    })
    
    it.only('Autosuggest  Dropdown', () => {

        cy.visit('/')

        cy.get('input[name="search"]').type('Delhi')

        cy.get('.suggestion-link').contains('Delhi University').click()

        
  
      
    })
  

    it.skip('Dynamic  Dropdown', () => {

        cy.visit('https://www.google.com/')

        cy.get('[title="Search"]').type('Cypress automation')
        

        cy.get('div[class="wM6W7d"] span').each(($el,index,$list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }

        })

        //cy.get('[title="Search"]').should('have.text','cypress automation')

        

    
        
  
      
    })
  
    
  
  })
  
  