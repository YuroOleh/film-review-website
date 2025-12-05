import { mount } from "cypress/react";
import MovieCard from "../../../src/components/Films/MovieCard";
import { MemoryRouter } from "react-router-dom";

describe("MovieCard component", () => {
  const film = {
    id: 1,
    title: "Test Film",
    poster: "/poster.jpg",
    published: "2025-12-05",
    description: "Test description",
    length: 125, 
  };

  it("renders all film information", () => {
    mount(
      <MemoryRouter>
        <MovieCard film={film} />
      </MemoryRouter>
    );

    cy.contains(film.title).should("exist");
    cy.contains(film.description).should("exist");

    const hours = Math.floor(film.length / 60);
    const minutes = film.length % 60;
    cy.contains(`${hours}h ${minutes}min`).should("exist");

    const date = new Date(film.published).toLocaleDateString("uk-UA");
    cy.contains(date).should("exist");

    cy.get("img").should("have.attr", "src").and("include", film.poster);
  });

  it("link navigates to film details", () => {
    mount(
      <MemoryRouter>
        <MovieCard film={film} />
      </MemoryRouter>
    );

    cy.get("a").first().should("have.attr", "href", `/films/details/${film.id}`);
  });
});