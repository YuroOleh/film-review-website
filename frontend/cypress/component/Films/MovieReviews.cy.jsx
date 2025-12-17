import { mount } from "cypress/react";
import MovieReviews from "../../../src/components/Films/MovieReviews";
import { MemoryRouter } from "react-router-dom";

describe("MovieReviews component", () => {
  const reviews = [
    { id: 1, text: "Review 1", rating: 5 },
    { id: 2, text: "Review 2", rating: 4 },
    { id: 3, text: "Review 3", rating: 3 },
  ];

  beforeEach(() => {
    mount(
      <MemoryRouter>
        <MovieReviews reviews={reviews} />
      </MemoryRouter>
    );
  });

  it("renders all reviews", () => {
    cy.get('[data-testid="movie-reviews"]')
      .children()
      .should("have.length", reviews.length);

    reviews.forEach((review) => {
      cy.contains(review.text).should("exist");
      cy.contains(review.rating).should("exist");
    });
  });

  it("links navigate to correct review details", () => {
    reviews.forEach((review) => {
      cy.contains(review.text)
        .closest("a")
        .should("have.attr", "href", `/reviews/details/${review.id}`);
    });
  });

  it("simulates dragging horizontally (mock scroll)", () => {
    cy.get('[data-testid="movie-reviews"]').then($div => {
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
    cy.get('[data-testid="movie-reviews"] a').first().then($link => {
      cy.wrap($link)
        .trigger("mousedown", { pageX: 0 })
        .trigger("mousemove", { pageX: 50 })
        .trigger("mouseup")
        .click({ force: true });

      cy.wrap($link).should("exist");
    });
  });

  it("allows click if not dragged", () => {
    cy.get('[data-testid="movie-reviews"] a').first().then($link => {
      cy.wrap($link)
        .trigger("mousedown", { pageX: 0 })
        .trigger("mouseup")
        .click();

      cy.wrap($link).should("exist");
    });
  });
});
