// test suite name
describe('Tutorialspoint Test', function () {
    // Test case
    it('Scenario 1', function () {
        // test step for URL launching
        cy.visit("http://automationpractice.com/index.php?controller=contact")
        const yourFixturePath="img.jpg";
        cy.get('input[type="file"]').attachFile(yourFixturePath)
        

    })

    it('Scenario 2', function () {
        // test step for URL launching
        cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/")
        const yourFixturePath="img.jpg";
        cy.get('#file').attachFile(yourFixturePath)
        

    })

    it('Scenario 3', function () {
        // test step for URL launching
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        const yourFixturePath1="img.jpg";
        const yourFixturePath2="example.json"
        
        cy.get('input[name="filesToUpload"]').attachFile(yourFixturePath1)
                                              .attachFile(yourFixturePath2)
                                              
        

    })
})