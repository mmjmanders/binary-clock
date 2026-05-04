import dayjs from 'dayjs'

const countBits = (n: number) =>
  n
    .toString(2)
    .split('')
    .filter((b) => b === '1').length

const numOnForDate = (d: Date) =>
  [
    Math.floor(d.getHours() / 10),
    d.getHours() % 10,
    Math.floor(d.getMinutes() / 10),
    d.getMinutes() % 10,
    Math.floor(d.getSeconds() / 10),
    d.getSeconds() % 10,
  ].reduce((acc, v) => acc + countBits(v), 0)

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
  describe('hours', () => {
    afterEach(() => cy.clock().then((clock) => clock.restore()))

    Array.from({ length: 24 })
      .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'hours'))
      .forEach((date) => {
        it(`should pass for hours of ${date.format('HH:mm:ss')}`, () => {
          cy.clock(date.toDate())
          cy.visit('/')
          cy.get('.is-on').should('have.length', numOnForDate(date.toDate()))
        })
      })
  })

  describe('minutes', () => {
    afterEach(() => cy.clock().then((clock) => clock.restore()))

    Array.from({ length: 60 })
      .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'minutes'))
      .forEach((date) => {
        it(`should pass for minutes of ${date.format('HH:mm:ss')}`, () => {
          cy.clock(date.toDate())
          cy.visit('/')
          cy.get('.is-on').should('have.length', numOnForDate(date.toDate()))
        })
      })
  })

  describe('seconds', () => {
    afterEach(() => cy.clock().then((clock) => clock.restore()))

    Array.from({ length: 60 })
      .map((_, i) => dayjs(new Date('2026-05-04T00:00:00.000+02:00')).add(i, 'seconds'))
      .forEach((date) => {
        it(`should pass for seconds of ${date.format('HH:mm:ss')}`, () => {
          cy.clock(date.toDate())
          cy.visit('/')
          cy.get('.is-on').should('have.length', numOnForDate(date.toDate()))
        })
      })
  })
})
