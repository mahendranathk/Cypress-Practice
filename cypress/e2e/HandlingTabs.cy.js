describe('Test Suite1', () => {

    it('Handling Tabs', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('a[id="opentab"]').invoke('removeAttr','target').click()
      cy.url().should('include','rahulshettyacademy')
      cy.go('back')
      

      
      
    })

    it.only('Handling Tabs-Alternate approach', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('a[id="opentab"]').then((e)=>{
            let url=e.prop('href')
            cy.log(url)
            cy.visit(url)
        })
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
  
        
        
      })
  
    
  
  })
  
  