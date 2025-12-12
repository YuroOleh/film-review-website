describe("Login page", () => {
  it("logs in successfully and redirects to films page", () => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");

    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
  });
  it("shows alert on invalid login", () => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("wrong@gmail.com");
    cy.get("input[placeholder='Password']").type("wrongpassword");

    cy.on("window:alert", (text) => {
        expect(text).to.equal("Invalid email or password");
    });

    cy.contains("button", "Login").click();
    });
  it("navigates to register page when clicking Sign up", () => {
    cy.visit("/login");

    cy.contains("Sign up").click();

    cy.url().should("include", "/register");

    cy.get("input[placeholder='Your full name']").should("exist");
  });
});