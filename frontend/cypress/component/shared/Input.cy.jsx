import { mount } from "cypress/react";
import Input from "../../../src/components/shared/Input";

describe("Input component", () => {
  it("renders with correct value and placeholder", () => {
    mount(
      <Input
        value="Hello"
        placeholder="Enter text"
        onChange={() => {}}
      />
    );

    cy.get('input')
      .should('have.value', 'Hello')
      .and('have.attr', 'placeholder', 'Enter text');
  });

  it("calls onChange when typing", () => {
    const onChange = cy.spy().as("onChangeSpy");

    mount(
      <Input
        value=""
        placeholder="Type here"
        onChange={onChange}
      />
    );

    cy.get('input')
      .type('ABC')
      .then(() => {
        expect(onChange).to.have.been.calledThrice; 
      });
  });
});