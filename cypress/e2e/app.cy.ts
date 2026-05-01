describe('App', () => {
  it('should have correct title', () => {
    cy.title().should('have.text', 'Binary Clock')
  })

  it('should have correct heading', () => {
    cy.get('h1').should('contain.text', 'Binary Clock')
  })

  it('should have correct version', () => {
    cy.get('footer').should('contain.text', 'e2e')
  })
})
