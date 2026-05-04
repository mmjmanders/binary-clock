import dayjs from 'dayjs'

describe('App', () => {
  afterEach(() => {
    cy.clock().then((clock) => clock.restore())
  })

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
  Array.from({ length: 24 })
    .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'hours'))
    .forEach((date) => {
      it(`should pass for hours of ${date.format('HH:mm:ss')}`, () => {
        cy.clock(date.toDate())
        const numOn = [Math.floor(date.get('hours') / 10), date.get('hours') % 10].reduce(
          (acc, value) =>
            acc +
            value
              .toString(2)
              .split('')
              .filter((n) => n === '1').length,
          0,
        )
        cy.visit('/')
        cy.get('.is-on').should('have.length', numOn)
      })
    })

  Array.from({ length: 60 })
    .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'minutes'))
    .forEach((date) => {
      it(`should pass for minutes of ${date.format('HH:mm:ss')}`, () => {
        cy.clock(date.toDate())
        const numOn = [Math.floor(date.get('minutes') / 10), date.get('minutes') % 10].reduce(
          (acc, value) =>
            acc +
            value
              .toString(2)
              .split('')
              .filter((n) => n === '1').length,
          0,
        )
        cy.visit('/')
        cy.get('.is-on').should('have.length', numOn)
      })
    })

  Array.from({ length: 60 })
    .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'seconds'))
    .forEach((date) => {
      it(`should pass for seconds of ${date.format('HH:mm:ss')}`, () => {
        cy.clock(date.toDate())
        const numOn = [Math.floor(date.get('seconds') / 10), date.get('seconds') % 10].reduce(
          (acc, value) =>
            acc +
            value
              .toString(2)
              .split('')
              .filter((n) => n === '1').length,
          0,
        )
        cy.visit('/')
        cy.get('.is-on').should('have.length', numOn)
      })
    })
})
