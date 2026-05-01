import App from '../App.vue'

describe('App', () => {
  beforeEach(() => {
    cy.mount(App)
  })

  it('should have correct heading', () => {
    cy.get('h1').should('have.text', 'Binary Clock')
  })

  it('should have correct version', () => {
    cy.get('footer').should('contain.text', 'component')
  })
})
