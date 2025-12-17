import { mount } from "cypress/react";
import SendButton from "../../../src/components/shared/SendButton";

describe("SendButton component", () => {
  it("renders button with send icon", () => {
    mount(<SendButton onClick={() => {}} />);
    cy.get("button").should("exist");
    cy.get("img").should("have.attr", "src", "/icons/send.png");
    cy.get("img").should("have.attr", "alt", "Send");
  });

  it("calls onClick when button is clicked", () => {
    const onClickSpy = cy.spy().as("onClickSpy");
    mount(<SendButton onClick={onClickSpy} />);
    cy.get("button").click();
    cy.get("@onClickSpy").should("have.been.calledOnce");
  });
});