describe("Discussions page", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
    cy.visit("/discussions");
  });

  it("loads discussions page and shows discussions list", () => {
    cy.contains("Loading...").should("not.exist"); 
    cy.get("div[class*='discussions']")
      .find("div")
      .should("have.length.at.least", 1);
  });

  it("searches for a discussion and shows results", () => {
    cy.get("input[placeholder='Search discussions by title...']")
      .clear()
      .type("Hello{enter}");

    cy.contains(/Hello/i).should("exist");
  });

  it("sorts discussions by messages ascending", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("button[class*='sort']").click();

    cy.get("div[class*='filterMenuWrapper']").within(() => {
      cy.get("select").first().select("Messages");
      cy.get("select").eq(1).select("Ascending");
    });

    cy.contains("Loading...").should("not.exist");
    cy.get("div[class*='discussions']", { timeout: 10000 })
      .should("have.length.at.least", 1);
  });

  it("clicks on first discussion and navigates to details page", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='discussions'] div[class*='container']")
        .first()
        .click({ force: true });

    cy.url().should("match", /\/discussions\/details\/\d+$/);
  });

  it("paginates through discussions", () => {
    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='pagination']").contains("2").click();

    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='discussions']", { timeout: 10000 })
      .should("have.length.at.least", 1);
  });
});
