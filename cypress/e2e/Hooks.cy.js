describe('Test Suite3', () => {

    before(()=>{
        cy.log('This is setup block')

    })
    beforeEach(()=>{
        cy.log('This block runs multiple times before each it block')
    })
    afterEach(()=>{
        cy.log('This block runs mulitple times after each it block')
    })
    after(()=>{
        cy.log('This is teardown block')
    })


    

    it('Test2', () => {
      
      
        cy.log('This is Test2')
      
    })
    it('Test3', () => {
      
      
        cy.log('This is Test3')
      
    })
    
  
    
  
  })
  
  