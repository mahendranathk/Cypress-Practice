describe('My Second Test Suite', function() 
{
  
it('Test1',function()
{
    cy.visit('http://testautomationpractice.blogspot.com/') //opening the website

//1)Check value presence anywhere in the table
cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')

//2)Check value presence in specific row and column
cy.get('table[name="BookTable"]> tbody> tr:nth-child(2)> td:nth-child(3)').contains('Selenium').should('be.visible')

//3)Verify the book name "Master in Java" whose author is Amod
cy.get('table[name="BookTable"]> tbody> tr td:nth-child(2)').each(($e1, index, $list)=> {
const text=$e1.text()
if(text.includes("Amod"))
{
cy.get('table[name="BookTable"]> tbody> tr td:nth-child(1)').eq(index).then(function(bname)
{
const bookName=bname.text()
expect(bookName).to.equal("Master in Java")
})
}
})
})
})