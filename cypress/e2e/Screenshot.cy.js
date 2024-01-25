describe('Test Suite1', () => {

    it('Screenshots', () => {

        cy.visit('https://demo.opencart.com/')
        cy.screenshot('homepage')

        cy.get('img[alt="Your Store"]').screenshot('logo')



        
        
  
      
    })
    
      
    
  
  })
  
  