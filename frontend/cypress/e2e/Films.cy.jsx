describe("Films page", () => {

  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
  });

  it("loads films page and shows films list", () => {
    cy.get("input[placeholder='Search films...']").should("exist");

    cy.get("div[class*='filmList']").find("div").should("have.length.at.least", 1);
  });

  it("searches for a film and shows results", () => {
    cy.get("input[placeholder='Search films...']")
    .clear()
    .type("Forrest{enter}");

    cy.get("div[class*='filmList']")
    .contains(/forrest/i)
    .should("exist");
  });

  it("sorts films by rating ascending", () => {
    cy.get("button[class*='sort']").click();

    cy.get("div[class*='filterMenuWrapper']").within(() => {
      cy.get("select").first().select("Rating");
      cy.get("select").eq(1).select("Ascending");
    });

    cy.get("div[class*='filmList'] div._cardContainer_1k7l6_1").should("have.length.at.least", 1);
  });

  
  it("clicks on first film and navigates to details page", () => {
    cy.get("div[class*='filmList'] div._cardContainer_1k7l6_1")
      .first()
      .click({ force: true });

    cy.url().should("include", "/films/details");
  });
});