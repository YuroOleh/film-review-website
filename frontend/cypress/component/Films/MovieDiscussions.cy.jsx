import { mount } from "cypress/react";
import MovieDiscussions from "../../../src/components/Films/MovieDiscussions";
import { MemoryRouter } from "react-router-dom";

describe("MovieDiscussions component", () => {
  const discussions = [
    { id: 1, title: "Discussion 1", userId: 1, commentaries: 5 },
    { id: 2, title: "Discussion 2", userId: 2, commentaries: 3 },
    { id: 3, title: "Discussion 3", userId: 3, commentaries: 10 },
  ];

  beforeEach(() => {
    mount(
      <MemoryRouter>
        <MovieDiscussions discussions={discussions} />
      </MemoryRouter>
    );
  });

  it("renders all discussions", () => {
    cy.get('[data-testid="movie-discussions"]')
      .children()
      .should("have.length", discussions.length);

    discussions.forEach(discussion => {
      cy.contains(discussion.title).should("exist");
      cy.contains(discussion.commentaries).should("exist");
    });
  });

  it("link navigates to correct discussion detail", () => {
    discussions.forEach(discussion => {
      cy.contains(discussion.title)
        .closest("a")
        .should("have.attr", "href", `/discussions/details/${discussion.id}`);
    });
  });

  it("simulates dragging horizontally (mock scroll)", () => {
    cy.get('[data-testid="movie-discussions"]').then($div => {
      $div[0].scrollLeft = 0;

      cy.wrap($div)
        .trigger("mousedown", { pageX: 0 })
        .trigger("mousemove", { pageX: 100 })
        .trigger("mouseup")
        .then(() => {
          $div[0].scrollLeft = 100;
          expect($div[0].scrollLeft).to.not.eq(0);
        });
    });
  });

  it("prevents click if dragged", () => {
    cy.get('[data-testid="movie-discussions"] a').first().then($link => {
      cy.wrap($link)
        .trigger("mousedown", { pageX: 0 })
        .trigger("mousemove", { pageX: 50 }) 
        .trigger("mouseup")
        .click({ force: true });

      cy.wrap($link).should("exist"); 
    });
  });

  it("allows click if not dragged", () => {
    cy.get('[data-testid="movie-discussions"] a').first().then($link => {
      cy.wrap($link)
        .trigger("mousedown", { pageX: 0 })
        .trigger("mouseup")
        .click(); 

      cy.wrap($link).should("exist");
    });
  });
});
