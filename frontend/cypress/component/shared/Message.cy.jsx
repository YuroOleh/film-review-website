import { mount } from "cypress/react";
import Message from "../../../src/components/shared/Message";

describe("Message component", () => {
  it("renders the title and text correctly", () => {
    mount(
      <Message
        messageTitle="Hello"
        messageText="This is a test message"
      />
    );

    cy.contains("Hello").should("be.visible");
    cy.contains("This is a test message").should("be.visible");
  });
});