import { mount } from 'cypress/react'
import Button from '../../../src/components/shared/Button'

describe('Button component', () => {
  it('renders with label', () => {
    mount(<Button label="Click me" />)

    cy.contains("Click me").should('be.visible')
  })

  it('calls onClick when clicked', () => {
    const onClick = cy.spy().as('onClickSpy')

    mount(<Button label="Click" onClick={onClick} />)

    cy.contains("Click").click()

    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})