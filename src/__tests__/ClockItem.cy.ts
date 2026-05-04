import ClockItem from '@/components/ClockItem.vue'

describe('ClockItem', () => {
  it('should render properly', () => {
    cy.mount(ClockItem, {
      props: {
        numCirclesLeft: 0,
        numCirclesRight: 0,
        value: 0,
      },
    })
  })

  /* Parameterized tests */
  ;[
    { numCirclesLeft: 2, numCirclesRight: 4, value: 23, numOn: 3 },
    { numCirclesLeft: 2, numCirclesRight: 4, value: 12, numOn: 2 },
    { numCirclesLeft: 2, numCirclesRight: 4, value: 7, numOn: 3 },
    { numCirclesLeft: 3, numCirclesRight: 4, value: 42, numOn: 2 },
    { numCirclesLeft: 3, numCirclesRight: 4, value: 59, numOn: 4 },
  ].forEach(({ numCirclesLeft, numCirclesRight, value, numOn }) => {
    it(`should have ${numOn} circles on when value is ${value}`, () => {
      cy.mount(ClockItem, {
        props: {
          numCirclesLeft,
          numCirclesRight,
          value,
        },
      })
      cy.get('circle.is-on').should('have.length', numOn)
    })
  })
})
