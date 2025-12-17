describe("News Details page", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films"); 
  });

  it("loads article details and shows content", () => {
    cy.visit("/news/details/1");

    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='detailsContainer']").within(() => {
      cy.get("p[class*='headerTitle']").should("exist");
      cy.get("p[class*='detailsText']").should("exist");
      cy.get("div[class*='viewsContainer']").should("exist");
      cy.get("div[class*='commentsContainer']").should("exist");
    });
  });

  it("displays comments", () => {
    cy.visit("/news/details/1");

    cy.contains("Loading...").should("not.exist");

    cy.get("div[class*='commentsContainer']").within(() => {
      cy.get("div[class*='comment']").should("have.length.at.least", 1);
    });
  });

  it("writes a new comment", () => {
    cy.visit("/news/details/1");

    cy.contains("Loading...").should("not.exist");

    const commentText = "This is a test comment";

    cy.get("input[placeholder='Write your comment...']")
      .type(commentText);

    cy.get("div[class*='sendButton'] button").click();

    cy.get("input[placeholder='Write your comment...']").should("have.value", "");

    cy.reload();

    cy.get("div[class*='commentsContainer']").contains(commentText).should("exist");
  });

  it("shows message when article does not exist", () => {
    cy.visit("/news/details/999999"); 

    cy.contains("Article does not exist...").should("exist");
    cy.contains("Check other articles on news page").should("exist");
  });

  it("marks article as viewed", () => {
    cy.visit("/news/details/1");    
  });
});
