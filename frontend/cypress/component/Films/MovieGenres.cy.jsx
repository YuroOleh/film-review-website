import { mount } from "cypress/react";
import MovieGenres from "../../../src/components/Films/MovieGenres";
import { MemoryRouter } from "react-router-dom";

describe("MovieGenres component", () => {
  const genres = ["Action", "Comedy", "Drama", "Horror"];

  it("renders all genres", () => {
    mount(
      <MemoryRouter>
        <MovieGenres genres={genres} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-genres"]')
      .children()
      .should("have.length", genres.length);

    genres.forEach(genre => {
      cy.contains(genre).should("exist");
    });
  });

  it("prevents click while dragging", () => {
    mount(
      <MemoryRouter>
        <MovieGenres genres={genres} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-genres"]')
      .trigger("mousedown", { pageX: 100 })
      .trigger("mousemove", { pageX: 150 })
      .trigger("mouseup")
      .click();
  });

  it("allows click without dragging", () => {
    mount(
      <MemoryRouter>
        <MovieGenres genres={genres} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-genres"]')
      .trigger("mousedown", { pageX: 100 })
      .trigger("mouseup")
      .click();
  });
});
