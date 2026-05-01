describe('App', () => {
  it('should have correct title', () => {
    cy.title().should('equal', 'Binary Clock')
  })

  it('should have correct heading', () => {
    cy.get('h1').should('have.text', 'Binary Clock')
  })

  it('should have correct version', () => {
    cy.get('footer').should('contain.text', 'e2e')
  })
})
