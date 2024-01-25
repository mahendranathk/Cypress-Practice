import HomePage from '../PageObjects/HomePage'
describe('Test Suite1', () => {

    it('Test', () => {
       const home=new HomePage()
       cy.visit('/')
       //home.display()
       home.removeAttribute()
       home.clickWomenSection()
       home.clickTops()


    })
})