import { mount } from "cypress/react";
import Discussion from "../../../src/components/Discussions/Discussion";

describe("Discussion component", () => {
  it("renders discussion with user", () => {
    const discussion = { title: "Test Discussion", userId: 1, commentaries: 5 };
    const testing = {
      user: { fullName: "Oleg" },
      loadingUser: false,
      errorUser: null
    };

    mount(<Discussion discussion={discussion} testing={testing} />);

    cy.contains("Test Discussion").should("exist");
    cy.contains("Oleg").should("exist");
    cy.contains("5").should("exist");
    cy.get("img").should("have.length", 2);
  });

  it("renders 'User' if no user", () => {
    const discussion = { title: "Another Discussion", userId: 2, commentaries: 3 };
    const testing = {
      user: null,
      loadingUser: false,
      errorUser: null
    };

    mount(<Discussion discussion={discussion} testing={testing} />);

    cy.contains("Another Discussion").should("exist");
    cy.contains("User").should("exist");
    cy.contains("3").should("exist");
  });
});
