describe("Review Details Page", () => {

  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");

    cy.visit(`/reviews/details/1`);
  });

  it("shows loading indicators initially and then review content", () => {
    cy.contains("Loading...").should("exist").then(() => {
      cy.get(`div[class*='container']`).should("exist");
    });
  });

  it("displays film information", () => {
    cy.get("div[class*='filmContainer']").within(() => {
      cy.get("img[class*='poster']").should("exist");
      cy.get("p[class*='filmTitle']").should("exist");
      cy.get("p[class*='filmRatingMark']").should("exist");
      cy.get("p[class*='filmDescription']").should("exist");
    });
  });

  it("displays review information", () => {
    cy.get("div[class*='reviewContainer']").within(() => {
      cy.get("img[class*='avatar']").should("exist");
      cy.get("p[class*='username']").should("exist");
      cy.get("p[class*='reviewText']").should("exist");
      cy.get("p[class*='reviewRatingMark']").should("exist");
      cy.get("img[class*='reviewRatingStar']").should("have.length", 5);
    });
  });

  it("shows 'review does not exist' message if review is missing", () => {
    cy.visit(`/reviews/details/99999`);
    cy.contains("Review does not exist...").should("exist");
    cy.contains("Check other reviews on the reviews page").should("exist");
  });
});
