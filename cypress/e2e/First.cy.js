describe('Test Suite1', () => {

  it('Test1', () => {
    cy.visit('https://gmail.com')
    cy.get('input[name="identifier"]').type('mahendranathkundla')
    cy.contains('Next').click()
    
  })

  

})

