import { mount } from "cypress/react";
import MovieReviews from "../../../src/components/Films/MovieReviews";
import { MemoryRouter } from "react-router-dom";

describe("MovieReviews component", () => {
  const reviews = [
    { id: 1, text: "Review 1", rating: 5 },
    { id: 2, text: "Review 2", rating: 4 },
    { id: 3, text: "Review 3", rating: 3 },
  ];

  it("renders all reviews", () => {
    mount(
      <MemoryRouter>
        <MovieReviews reviews={reviews} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-reviews"]')
      .children()
      .should("have.length", reviews.length);

    reviews.forEach((review) => {
      cy.contains(review.text).should("exist");
      cy.contains(review.rating).should("exist");
    });
  });

  it("links navigate to correct review details", () => {
    mount(
      <MemoryRouter>
        <MovieReviews reviews={reviews} />
      </MemoryRouter>
    );

    reviews.forEach((review) => {
      cy.contains(review.text)
        .closest("a")
        .should("have.attr", "href", `/reviews/details/${review.id}`);
    });
  });
});
