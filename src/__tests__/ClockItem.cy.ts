import ClockItem from '@/components/ClockItem.vue'

describe('ClockItem', () => {
  it('should render properly', () => {
    cy.mount(ClockItem, {
      props: {
        leftDigits: 1,
        rightDigits: 1,
        value: 1,
      },
    })
  })
})
