describe("News page", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");

    cy.visit("/news");
  });

  it("loads news page and shows articles list", () => {
    cy.get("input[placeholder='Search news...']").should("exist");

    cy.get(`div[class*='articles']`).find("div").should("have.length.at.least", 1);
  });

  it("searches for a news article and shows results", () => {
    cy.get("input[placeholder='Search news...']")
      .clear()
      .type("Starfall{enter}");

    cy.get("div[class*='articles']")
      .contains(/Starfall/i)
      .should("exist");
  });

  it("sorts news by views ascending", () => {
    cy.get("button[class*='sort']").click();

    cy.get("div[class*='filterMenuWrapper']").within(() => {
      cy.get("select").first().select("Views");
      cy.get("select").eq(1).select("Ascending");
    });

    cy.get("div[class*='articles'] div[class*='article']").should("have.length.at.least", 1);
  });
  
  it("clicks on first article and navigates to details page", () => {
    cy.get("div[class*='articles'] div[class*='article']")
      .first()
      .click({ force: true });

    cy.url().should("match", /\/news\/details\/\d+$/);
  });
});
