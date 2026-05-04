// import dayjs from 'dayjs'

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

  it('should have clock element', () => {
    cy.get('.clock > svg').should('be.visible')
  })

  it('should have 20 dots', () => {
    cy.get('circle').should('have.length', 20)
  })

  /* Parameterized tests */
  /*Array.from({ length: 5 })
    .map((_, i) => dayjs(new Date('2026-05-04T12:23:00.000+02:00')).add(i, 'second').toDate())
    .forEach((date) => {
      it(`should pass for ${date.toISOString()}`, () => {
        cy.clock(date)
        cy.visit('/')
      })
    })*/
})
