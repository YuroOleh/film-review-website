import { mount } from "cypress/react";
import FilmReview from "../../../src/components/Reviews/FilmReview";
import { MemoryRouter } from "react-router-dom";

describe("FilmReview component via testing prop", () => {
  const review = { id: 1, text: "Awesome!", rating: 5, film: 1, user: 1 };
  const testing = {
    film: { id: 1, title: "Test Film", poster: "/poster.jpg", rating: 5 },
    user: { id: 1, username: "Oleg"},
  };

  it("renders film and review correctly", () => {
    mount(
      <MemoryRouter>
        <FilmReview review={review} testing={testing} />
      </MemoryRouter>
    );

    cy.contains("Test Film").should("exist");
    cy.get('img[src="/poster.jpg"]').should("exist");
    cy.contains("Oleg").should("exist");
    cy.contains("Awesome!").should("exist");
    cy.get('img[src="/icons/star.png"]').should("exist");
  });
});
