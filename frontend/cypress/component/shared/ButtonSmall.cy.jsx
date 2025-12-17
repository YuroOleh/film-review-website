import { mount } from 'cypress/react'
import ButtonSmall from '../../../src/components/shared/ButtonSmall'

describe('ButtonSmall component', () => {
  it('renders with label', () => {
    mount(<ButtonSmall label="Small Btn" />)

    cy.contains("Small Btn").should('be.visible')
  })

  it('calls onClick when clicked', () => {
    const onClick = cy.spy().as('onClickSpy')

    mount(<ButtonSmall label="Press" onClick={onClick} />)

    cy.contains("Press").click()

    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})