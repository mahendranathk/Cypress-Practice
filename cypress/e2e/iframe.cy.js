describe('Test Suite1', () => {

    it('Iframes approach1', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')

      const iframe=cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap)
      
      iframe.clear().type('Hi {ctrl+a}')

      cy.get('button[aria-label="Bold"]').click()



      
      
    })

    it('Iframes -using custom command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type('Hello {ctrl+a}')
        cy.get('button[aria-label="Bold"]').click()


        
  
        
        
      })

      it.only('Iframes -using iframe plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

       cy.frameLoaded('#mce_0_ifr') //Load the frame
       cy.iframe('#mce_0_ifr').clear().type('hey welcome {ctrl+a}')

       cy.get('button[aria-label="Bold"]').click()




        
  
        
        
      })
  
    
  
  })
  
  