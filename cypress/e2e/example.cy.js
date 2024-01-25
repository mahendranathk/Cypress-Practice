// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
    it('Scenario 1', function () {
        // test step for URL launching
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')

        // cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')



    })

   
})