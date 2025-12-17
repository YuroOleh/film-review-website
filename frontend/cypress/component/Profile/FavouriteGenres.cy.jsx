import { mount } from "cypress/react";
import FavouriteGenres from "../../../src/components/Profile/FavouriteGenres";

describe("FavouriteGenres component", () => {
  it("renders the correct number of genres", () => {
    mount(<FavouriteGenres />);

    cy.get('div._genres_1q01u_1') 
      .children() 
      .should('have.length', 4);

    cy.contains('Genre').should('exist');
  });

  it("handles mouse events without errors", () => {
    mount(<FavouriteGenres />);

    cy.get('div._genres_1q01u_1')
      .trigger('mousedown', { pageX: 100 })
      .trigger('mousemove', { pageX: 120 })
      .trigger('mouseup');

    cy.contains('Genre').should('exist'); 
  });
});
