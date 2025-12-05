import { mount } from "cypress/react";
import Comment from "../../../src/components/shared/Comment";

describe("Comment component", () => {
  beforeEach(() => localStorage.clear());

  it("renders other user's comment", () => {
    localStorage.setItem("user", JSON.stringify({ id: 1 }));

    const message = { user: 2, text: "Hello from someone else" };
    const mockUser = { user: 2, username: "Oleg" };

    mount(<Comment message={message} mockUser={{ user: mockUser }} />);

    cy.contains("Oleg").should("be.visible");
    cy.contains("Hello from someone else").should("be.visible");
    cy.get("img").should("exist");
  });

  it("renders my comment", () => {
    localStorage.setItem("user", JSON.stringify({ id: 1 }));

    const message = { user: 1, text: "My own comment" };
    const mockUser = { user: 1, username: "Me" };

    mount(<Comment message={message} mockUser={{ user: mockUser }} />);

    cy.contains("My own comment").should("be.visible");
    cy.get("img").should("not.exist");
    cy.get("[class*=myCommentContainer]").should("exist");
  });
});

