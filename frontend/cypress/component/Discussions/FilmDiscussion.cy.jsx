import { mount } from "cypress/react";
import FilmDiscussion from "../../../src/components/Discussions/FilmDiscussion";
import { MemoryRouter } from "react-router-dom";

describe("FilmDiscussion component", () => {
  const discussion = {
    id: 1,
    title: "Test Discussion",
    film: 1,
    user: 1
  };

  const testing = {
    filmHook: { film: { title: "Test Film", poster: "test-poster.jpg" }, loadingFilm: false, errorFilm: null },
    userHook: { user: { username: "Oleg" }, loadingUser: false, errorUser: null },
    messagesCountHook: { count: 10, loading: false },
    uniqueUsersHook: { count: 5, loading: false }
  };

  it("renders all information correctly", () => {
    mount(
      <MemoryRouter>
        <FilmDiscussion discussion={discussion} testing={testing} />
      </MemoryRouter>
    );

    cy.contains("Test Discussion").should("exist");
    cy.contains("Test Film").should("exist");
    cy.contains("Oleg").should("exist");
    cy.contains("10").should("exist");
    cy.contains("5").should("exist");
  });

  it("shows placeholders when loading", () => {
    const loadingTesting = {
      filmHook: { film: null, loadingFilm: true, errorFilm: null },
      userHook: { user: null, loadingUser: true, errorUser: null },
      messagesCountHook: { count: 0, loading: true },
      uniqueUsersHook: { count: 0, loading: true }
    };

    mount(
      <MemoryRouter>
        <FilmDiscussion discussion={discussion} testing={loadingTesting} />
      </MemoryRouter>
    );

    cy.contains("Test Discussion").should("exist");
    cy.contains("Film").should("exist");
    cy.contains("User").should("exist");
    cy.contains("...").should("exist");
  });
});