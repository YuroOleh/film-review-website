import { mount } from "cypress/react";
import FavouriteMovies from "../../../src/components/Profile/FavouriteMovies";
import { MemoryRouter } from "react-router-dom";

describe("FavouriteMovies component", () => {
  const films = [
    { id: 1, poster: "/poster1.jpg" },
    { id: 2, poster: "/poster2.jpg" },
    { id: 3, poster: "/poster3.jpg" },
  ];

  it("renders all films", () => {
    mount(
      <MemoryRouter>
        <FavouriteMovies films={films} />
      </MemoryRouter>
    );

    cy.get('[data-testid="favourite-movies"]')
      .children()
      .should("have.length", films.length);

    films.forEach((film, index) => {
      cy.get('[data-testid="favourite-movies"]')
        .children()
        .eq(index)
        .find("img")
        .should("have.attr", "src", film.poster);
    });
  });

  it("prevents click if dragging occurs", () => {
    mount(
      <MemoryRouter>
        <FavouriteMovies films={films} />
      </MemoryRouter>
    );

    cy.get('[data-testid="favourite-movies"]')
      .children()
      .first()
      .as("firstFilm");

    cy.get("@firstFilm")
      .trigger("mousedown", { pageX: 100 })
      .trigger("mousemove", { pageX: 120 })
      .trigger("mouseup")
      .click();
  });

  it("allows click without dragging", () => {
    mount(
      <MemoryRouter>
        <FavouriteMovies films={films} />
      </MemoryRouter>
    );

    cy.get('[data-testid="favourite-movies"]')
      .children()
      .first()
      .as("firstFilm");

    cy.get("@firstFilm")
      .trigger("mousedown", { pageX: 100 })
      .trigger("mouseup")
      .click();
  });
});
