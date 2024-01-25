// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
    it('Write to a text file test1.txt', function () {
        cy.writeFile('cypress/fixtures/test1.txt','Testing\n')    
      
        

    })

    it('Write to a text file test1.txt', function () {
        cy.writeFile('cypress/fixtures/test1.txt','Information Hub',{flag:'a+'})    
      
        

    })

    it('Write to a JSON file example.json', function () {
        cy.writeFile('cypress/fixtures/example.json',{firstName:'Rich', lastName:'Mike'})    
      
        

    })

    it('Validate the content of both text and json file', function () {
        cy.readFile('cypress/fixtures/example.json').its('firstName').should('eq','Rich')
        cy.readFile('cypress/fixtures/test1.txt').should('contain','Testing')
      
        

    })



   
})