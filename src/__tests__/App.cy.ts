import App from '../App.vue'

describe('App', () => {
  it('should mount and render properly', () => {
    cy.mount(App)
    cy.get('h1').should('contain.text', 'Binary Clock')
  })
})
