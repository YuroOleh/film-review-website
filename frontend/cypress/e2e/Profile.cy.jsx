describe("Profile Page basic tests", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");

    cy.visit("/profile");
  });

  it("renders the Profile page", () => {
    cy.get("img[class*='avatar']").should("exist");
    cy.get("p[class*='username']").should("contain.text", "oleg");
    cy.get("p[class*='email']").should("contain.text", "mygmail@gmail.com");
  });

  it("navigates to My Watchlist page when clicking the button", () => {
    cy.contains("Go to watchlist").click();
    cy.url().should("include", "/mywatchlist");
  });

  it("navigates to My Reviews page when clicking the button", () => {
    cy.contains("View reviews").click();
    cy.url().should("include", "/myreviews");
  });

  it("navigates to My Discussions page when clicking the button", () => {
    cy.contains("See discussions").click();
    cy.url().should("include", "/mydiscussions");
  });

});