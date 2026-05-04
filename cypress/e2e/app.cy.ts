import dayjs from 'dayjs'

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
  Array.from({ length: 24 * 60 * 60 })
    .map((_, i) => dayjs(new Date('2026-05-04T12:23:00.000+02:00')).add(i, 'second'))
    .forEach((date) => {
      it(`should pass for ${date.format('HH:mm:ss')}`, () => {
        cy.clock(date.toDate())
        const [hoursLeft, hoursRight] = [Math.floor(date.get('hours') / 10), date.get('hours') % 10]
        const [minutesLeft, minutesRight] = [
          Math.floor(date.get('minutes') / 10),
          date.get('minutes') % 10,
        ]
        const [secondsLeft, secondsRight] = [
          Math.floor(date.get('seconds') / 10),
          date.get('seconds') % 10,
        ]
        const numOn = [
          hoursLeft,
          hoursRight,
          minutesLeft,
          minutesRight,
          secondsLeft,
          secondsRight,
        ].reduce(
          (acc, value) => acc + value.toString(2).split('').map(Number).filter(Boolean).length,
          0,
        )
        cy.visit('/')
        cy.get('.is-on').should('have.length', numOn)
      })
    })
})
