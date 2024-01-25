describe('Test Suite1', () => {

    it('Test1',{viewportHeight:1200,viewportWidth:1000}, () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
      
      let expName='Test Tester'

      cy.get('.oxd-userdropdown-name').then(function(x){

        let actName=x.text()
        //BDD Style
        // expect(actName).to.equal(expName)
        // expect(actName).to.not.equal(expName)

        //TDD Style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)

      })
      
     
      
    })

    
  
    
  
  })
  
  