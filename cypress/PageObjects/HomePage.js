class HomePage
{
    display()
    {
        alert("Hello! I am an alert box!!")
    }
    removeAttribute()
    {
        cy.get('a[class="logo"] img').invoke('removeattr','src')
    }
    clickWomenSection()
    {
    cy.get('span[class="ui-menu-icon ui-icon ui-icon-carat-1-e"]').contains('Women').click()
    }
    clickTops()
    {
        cy.get('span[class="ui-menu-icon ui-icon ui-icon-carat-1-e"]').contains('Tops').trigger('mouseover')
        cy.get('a[class="ui-corner-all ui-state-focus"]').click()
    }

}
export default HomePage