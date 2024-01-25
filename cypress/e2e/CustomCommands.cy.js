describe('Test Suite1', () => {

    it('Handling Links', () => {

        cy.visit('https://demo.nopcommerce.com/')

        // cy.get('div[class="item-grid"] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)').click()
        // cy.get('div[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch')
        
        cy.clickLink('Build your own computer')
        cy.get('div[class="product-name"] h1').should('have.text','Build your own computer')
        cy.go(-1)

        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('div[class="product-name"] h1').should('have.text','Apple MacBook Pro 13-inch')  
      
    })

    it.only('Login command', () => {

        cy.visit('https://demo.nopcommerce.com/')

       cy.clickLink('Log in')
       cy.loginApp('mahendranathkundla@gmail.com','test123')
       cy.get('.ico-account').should('have.text','My account')
      
    })
    
    
   
   
  
    
  
  })
  
  