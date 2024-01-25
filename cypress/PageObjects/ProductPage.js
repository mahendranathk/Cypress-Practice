class ProductPage
{
    clickProduct(product)
    {
        cy.get('[class="product-image-photo"]').contains(product).click()
    }
    selectSize()
    {
        cy.get('')
    }
}

export default ProductPage