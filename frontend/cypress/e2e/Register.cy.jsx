// cypress/e2e/register.cy.js

describe("Register page", () => {

  it("registers a new user successfully", () => {
    cy.visit("/register");

    const timestamp = Date.now();
    const email = `testuser${timestamp}@gmail.com`;
    const password = "password123";

    cy.get("input[placeholder='Your full name']").type("Test User");
    cy.get("input[placeholder='Email address']").type(email);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("input[placeholder='Confirm password']").type(password);

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Account created!");
    });

    cy.contains("button", "Sign up").click();

    cy.url().should("include", "/login");
  });

  it("shows alert on invalid registration", () => {
    cy.visit("/register");

    cy.get("input[placeholder='Your full name']").type("Test User");
    cy.get("input[placeholder='Email address']").type("invalidemail@gmail.com");
    cy.get("input[placeholder='Password']").type("password123");
    cy.get("input[placeholder='Confirm password']").type("differentpassword");

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Passwords do not match");
    });

    cy.contains("button", "Sign up").click();
  });

  it("navigates to login page when clicking Sign in", () => {
    cy.visit("/register");

    cy.contains("Sign in").click();

    cy.url().should("include", "/login");

    cy.get("input[placeholder='Email address']").should("exist");
  });

});
