import App from '../App.vue'

describe('App', () => {
  it('should render properly', () => {
    cy.mount(App)
    cy.get('h1').should('have.text', 'Binary Clock')
    cy.get('footer').should('contain.text', 'component')
  })
})
