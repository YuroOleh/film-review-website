describe("Discussion Details page", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
  });

  it("loads discussion details and shows content", () => {
    cy.visit("/discussions/details/1");

    cy.contains("Loading...").should("not.exist");

    cy.get("[data-testid='discussion-chat']", { timeout: 10000 }).should("exist");

    cy.get("[data-testid='discussion-container']").within(() => {
      cy.get("[data-testid='discussion-header']").should("exist");
      cy.get("[data-testid='discussion-chat']").should("exist");
      cy.get("[data-testid='comment']", { timeout: 10000 }).should("exist");
    });
  });

  it("displays messages", () => {
    cy.visit("/discussions/details/1");

    cy.contains("Loading...").should("not.exist");

    cy.get("[data-testid='discussion-chat']", { timeout: 10000 }).should("exist");

    cy.get("[data-testid='comment']", { timeout: 10000 }).should("have.length.at.least", 1);
  });

  it("sends a new message", () => {
    cy.visit("/discussions/details/1");

    cy.contains("Loading...").should("not.exist");

    const messageText = "This is a test message";

    cy.get("input[placeholder='Send your message...']").type(messageText);

    cy.get("[data-testid='send-button']").click();

    cy.get("input[placeholder='Send your message...']").should("have.value", "");

    cy.reload();

    cy.get("[data-testid='comment']", { timeout: 10000 })
      .contains(messageText)
      .should("exist");
  });

  it("shows message when discussion does not exist", () => {
    cy.visit("/discussions/details/999999");

    cy.contains("Discussion does not exist...").should("exist");
    cy.contains("Check other discussions on the discussions page").should("exist");
  });
});
