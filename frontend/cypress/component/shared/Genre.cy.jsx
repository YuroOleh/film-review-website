import { mount } from "cypress/react";
import Genre from "../../../src/components/shared/Genre";

describe("Genre component", () => {
  it("renders with the correct label", () => {
    mount(<Genre label="Action" />);

    cy.contains("Action").should("be.visible");
  });
});