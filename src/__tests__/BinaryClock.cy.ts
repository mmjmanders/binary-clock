import BinaryClock from '@/components/BinaryClock.vue'

describe('BinaryClock', () => {
  it('should render properly', () => {
    cy.mount(BinaryClock)
  })

  it('should have clock visible', () => {
    cy.mount(BinaryClock)
    cy.get('.clock > svg').should('be.visible')
  })

  it('should have time displayed', () => {
    cy.mount(BinaryClock)
    cy.get('.display-time').should('be.visible')
  })
})
