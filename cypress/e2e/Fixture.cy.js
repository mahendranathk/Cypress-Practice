// test suite name
describe('Tutorialspoint Test', function () {
   it('Fixture', function () {

    cy.fixture('orange1.json').then((data)=>{  
   
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    let userdata

    data.forEach((userdata)=>{

        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').type(userdata.password)
        cy.get('button[type="submit"]').click()

        if(userdata.username=='Admin' && userdata.password=='admin123')
        {
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)

            cy.get('.oxd-userdropdown-name').click()
            cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click()
        }
        else{
            cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
        }

    })   
    before(()=>{
        cy.fixture('data.json').then((data)=>{

        })
    })
    beforeEach(()=>{
        cy.fixture('data.json').then((data)=>{
            this.data=data
        })
    })
   


}) 


})
})

   