describe('Test Suite1', () => {

    it('MouseOver', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').trigger('mouseover')

        cy.contains('Top').click({force: true})

        
    })

    
    it('RightClick', () => {

        
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //approach1
        // cy.get('span[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
        // cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-cut"]>span').should('be.visible')

        //approach2

        cy.get('span[class="context-menu-one btn btn-neutral"]').rightclick()
        cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-cut"]>span').should('be.visible')
        

          
    
    })

    it('DoubleClick', () => {

        
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')

        //approach1
        // cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
        // cy.iframe('#iframeResult').find('input[id="field2"]').should('have.value','Hello World!')
        

        //approach2
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('input[id="field2"]').should('have.value','Hello World!')


       

        

        
    })

    it.only('Scrolling Page', () => {

        
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)').scrollIntoView({duration:2000})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)').should('be.visible')

        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(19) > td:nth-child(2)').scrollIntoView({duration:2000})
        cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(19) > td:nth-child(2)').should('be.visible')

        cy.get('div[id="footer"]').scrollIntoView({duration:2000})
        


       

        

        
    })


})
  
  