// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
    it.only('Scenario 1', function () {
        // test step for URL launching
       cy.visit('https://the-internet.herokuapp.com/upload') //
       //const fixturePath='cypress_architecture.jpg'
       cy.get('#file-upload').selectFile('cypress_architecture.jpg',{ force: true })
       cy.get('#file-submit').click()

       cy.get('div[class="example"] h3').should('be.visible')
        

    })

    it('Scenario 2 File Upload-Rename', function () {
        // test step for URL launching
       cy.visit('https://the-internet.herokuapp.com/upload')
       
       cy.get('#file-upload').attachFile({filePath:'cypress_architecture.jpg',fileName:'myfile.jpg'})
       cy.get('#file-submit').click()

       cy.get('div[class="example"] h3').should('be.visible')
        

    })

    it('Scenario 3 File Upload- Drag n Drop', function () {
        // test step for URL launching
       cy.visit('https://the-internet.herokuapp.com/upload')
       
       cy.get('#drag-drop-upload').attachFile('cypress_architecture.jpg',{ subjectType: 'drag-n-drop' })
       

      cy.get('div[class="dz-success-mark dz-clickable dz-started"]>div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"]>div[class="dz-details"]>div[class="dz-filename"]>span')
      .contains('cypress_architecture.jpg')
        

    })

   
})