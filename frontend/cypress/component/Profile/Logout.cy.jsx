import { mount } from "cypress/react";
import Logout from "../../../src/components/Profile/Logout";
import { MemoryRouter } from "react-router-dom";

describe("Logout component", () => {
  it("renders correctly", () => {
    const onClose = () => {};

    mount(
      <MemoryRouter>
        <Logout onClose={onClose} />
      </MemoryRouter>
    );

    cy.contains("Are you sure you want to exit your account?").should("exist");
    cy.contains("Return").should("exist");
    cy.contains("Logout").should("exist");
  });

  it("calls onClose when Return button clicked", () => {
    let called = false;
    const onClose = () => { called = true };

    mount(
      <MemoryRouter>
        <Logout onClose={onClose} />
      </MemoryRouter>
    );

    cy.contains("Return").click().then(() => {
      expect(called).to.be.true;
    });
  });

  it("Logout button has correct link", () => {
    const onClose = () => {};

    mount(
        <MemoryRouter>
        <Logout onClose={onClose} />
        </MemoryRouter>
    );

    cy.contains("Logout")
        .closest('a')
        .should("have.attr", "href", "/login");
  });
});
