import { mount } from "cypress/react";
import MovieDiscussions from "../../../src/components/Films/MovieDiscussions";
import { MemoryRouter } from "react-router-dom";

describe("MovieDiscussions component", () => {
  const discussions = [
    { id: 1, title: "Discussion 1", userId: 1, commentaries: 5 },
    { id: 2, title: "Discussion 2", userId: 2, commentaries: 3 },
    { id: 3, title: "Discussion 3", userId: 3, commentaries: 10 },
  ];

  it("renders all discussions", () => {
    mount(
      <MemoryRouter>
        <MovieDiscussions discussions={discussions} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-discussions"]')
      .children()
      .should("have.length", discussions.length);

    discussions.forEach(discussion => {
      cy.contains(discussion.title).should("exist");
      cy.contains(discussion.commentaries).should("exist");
    });
  });

  it("link navigates to correct discussion detail", () => {
    mount(
      <MemoryRouter>
        <MovieDiscussions discussions={discussions} />
      </MemoryRouter>
    );

    discussions.forEach(discussion => {
      cy.contains(discussion.title)
        .closest("a")
        .should("have.attr", "href", `/discussions/details/${discussion.id}`);
    });
  });
});
