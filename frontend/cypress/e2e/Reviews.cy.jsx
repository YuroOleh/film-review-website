describe("Reviews page", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
    cy.visit("/reviews");
  });

  it("loads reviews page and shows reviews list", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='reviewsContainer']")
      .find("div")
      .should("have.length.at.least", 1);
  });

  it("searches for a review and shows results", () => {
    cy.get("input[placeholder='Search review...']")
      .clear()
      .type("Bad{enter}");

    cy.contains(/Bad/i).should("exist");
  });

  it("sorts reviews by likes ascending", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("button[class*='sort']").click();

    cy.get("div[class*='filterMenuWrapper']").within(() => {
      cy.get("select").first().select("Likes");
      cy.get("select").eq(1).select("Ascending");
    });

    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='reviewsContainer']", { timeout: 10000 })
      .should("have.length.at.least", 1);
  });

  it("clicks on first review and navigates to details page", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='reviewsContainer'] div[class*='reviewContainer']")
        .first()
        .click({ force: true });

    cy.url().should("match", /\/reviews\/details\/\d+$/);
  });


  it("paginates through reviews", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='paginationContainer']").contains("2").click();

    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='reviewsContainer']", { timeout: 10000 })
      .should("have.length.at.least", 1);
  });
});
