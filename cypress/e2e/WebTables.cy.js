describe('Test Suite1', () => {

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('input[name="username"]').type('demo')
        cy.get('input[name="password"]').type('demo')
        cy.get('button.btn.btn-primary').click()

        cy.get('button[class="btn-close"]').click()

        cy.get('#menu-customer').click()
        cy.get('#menu-customer>ul>li:first-child').click()

    })

    it('Check Number Rows & Columns', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')   
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7')  

      
      
    })

    it('Check cell data from specific row & column', () => {

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)').contains('gorankrezic90@gmail.com')
    
      
    })

    it.only('Read all the rows & columns data in the first page', () => {

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
           .each(($row,index,$rows) =>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text())

                })

            })

           })
      
      

      
      
    })

    
    
  
  })
  
  