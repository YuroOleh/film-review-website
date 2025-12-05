import { mount } from "cypress/react";
import Navbar from "../../../src/components/shared/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
  it("renders all links and highlights active page", () => {
    mount(
      <MemoryRouter initialEntries={["/films"]}>
        <Navbar onLogoutClick={() => {}} />
      </MemoryRouter>
    );

    cy.contains("Films")
      .should("have.attr", "class")
      .and("include", "highlited");

    cy.contains("News")
      .should("have.attr", "class")
      .and("not.include", "highlited");

    cy.contains("Discussions")
      .should("have.attr", "class")
      .and("not.include", "highlited");

    cy.contains("Reviews")
      .should("have.attr", "class")
      .and("not.include", "highlited");

    cy.get('img[class*="avatarPlaceholder"]').should("exist");
  });

  it("renders Logout button on profile page", () => {
    mount(
      <MemoryRouter initialEntries={["/profile"]}>
        <Navbar onLogoutClick={() => {}} />
      </MemoryRouter>
    );

    cy.contains("Logout").should("be.visible");
    cy.get('img[class*="avatarPlaceholder"]').should("not.exist");
  });

  it("calls onLogoutClick when logout button is clicked", () => {
    const onLogoutClick = cy.spy().as("logoutSpy");

    mount(
      <MemoryRouter initialEntries={["/profile"]}>
        <Navbar onLogoutClick={onLogoutClick} />
      </MemoryRouter>
    );

    cy.contains("Logout").click();
    cy.get("@logoutSpy").should("have.been.calledOnce");
  });
});
