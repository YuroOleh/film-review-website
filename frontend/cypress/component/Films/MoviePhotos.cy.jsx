import { mount } from "cypress/react";
import MoviePhotos from "../../../src/components/Films/MoviePhotos";
import { MemoryRouter } from "react-router-dom";

describe("MoviePhotos component", () => {
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg"
  ];

  it("renders all photos", () => {
    mount(
      <MemoryRouter>
        <MoviePhotos photos={photos} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-photos"]')
      .children()
      .should("have.length", photos.length);

    photos.forEach((photo, index) => {
      cy.get('img').eq(index).should('have.attr', 'src', photo);
    });
  });

  it("prevents click while dragging", () => {
    mount(
      <MemoryRouter>
        <MoviePhotos photos={photos} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-photos"]')
      .trigger("mousedown", { pageX: 100 })
      .trigger("mousemove", { pageX: 150 })
      .trigger("mouseup")
      .click();
  });

  it("allows click without dragging", () => {
    mount(
      <MemoryRouter>
        <MoviePhotos photos={photos} />
      </MemoryRouter>
    );

    cy.get('[data-testid="movie-photos"]')
      .trigger("mousedown", { pageX: 100 })
      .trigger("mouseup")
      .click();
  });
});

