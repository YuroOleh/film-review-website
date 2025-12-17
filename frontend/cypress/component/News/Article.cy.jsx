import { mount } from "cypress/react";
import Article from "../../../src/components/News/Article";
import { MemoryRouter } from "react-router-dom";

describe("Article component", () => {
  const article = {
    id: 1,
    title: "Test Article",
    description: "Test Description",
    created_at: "2025-12-05T12:00:00Z"
  };

  const testing = {
    viewsHook: { views: 123, loading: false }
  };

  it("renders all article information", () => {
    mount(
      <MemoryRouter>
        <Article article={article} testing={testing} />
      </MemoryRouter>
    );

    cy.contains("Test Article").should("exist");
    cy.contains("Test Description").should("exist");
    cy.contains("123").should("exist");
    cy.get("img").should("exist");
  });

  it("shows placeholder while loading views", () => {
    const testingLoading = {
      viewsHook: { views: 0, loading: true }
    };

    mount(
      <MemoryRouter>
        <Article article={article} testing={testingLoading} />
      </MemoryRouter>
    );

    cy.contains("...").should("exist");
  });
});
