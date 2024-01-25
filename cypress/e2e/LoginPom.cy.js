import Login from "../PageObjects/LoginPage"

describe('Test Suite1', () => {
    it.skip('General Approach', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="username"]').should('have.value', 'Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
        

    })

    it.skip('Using PageObject', () => {
        cy.visit('/')

        const lg=new Login() //object creation
        lg.enterUserName('Admin')
        lg.enterPassword('admin123')
        lg.clickLogin()
        lg.verifyLogin()

        

    })

    it('Using PageObject and Fixtures', () => {
        cy.visit('/')

        cy.fixture('orange.json').then((data)=>{
        const lg=new Login() //object creation
        lg.enterUserName(data.username)
        lg.enterPassword(data.password)
        lg.clickLogin()
        lg.verifyLogin()


        })

        

        

    })

})   