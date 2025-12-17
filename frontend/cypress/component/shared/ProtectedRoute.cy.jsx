import { mount } from "cypress/react";
import ProtectedRoute from "../../../src/components/shared/ProtectedRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("ProtectedRoute", () => {
  it("shows loading initially", () => {
    mount(
      <MemoryRouter>
        <ProtectedRoute getCurrentUserProp={() => new Promise(() => {})} />
      </MemoryRouter>
    );

    cy.contains("Loading...").should("exist");
  });

  it("redirects to login if user is not authenticated", () => {
    mount(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={<ProtectedRoute getCurrentUserProp={() => Promise.resolve(null)} />}
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    cy.contains("Login Page").should("exist");
  });

  it("renders children if user is authenticated", () => {
    const fakeUser = { id: 1, username: "Oleg" };

    mount(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={<ProtectedRoute getCurrentUserProp={() => Promise.resolve(fakeUser)} />}
          >
            <Route path="" element={<div>Protected Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    cy.contains("Protected Content").should("exist");
  });
});
