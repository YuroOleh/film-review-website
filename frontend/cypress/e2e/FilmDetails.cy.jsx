describe("FilmDetails page – real backend", () => {

  beforeEach(() => {
    cy.visit("/login");

    cy.get("input[placeholder='Email address']").type("mygmail@gmail.com");
    cy.get("input[placeholder='Password']").type("password111");
    cy.contains("button", "Login").click();

    cy.url().should("include", "/films");
 
    cy.visit("/films/details/1");

    cy.contains("Description:", { timeout: 10000 }).should("be.visible");
  });

  it("renders main film info", () => {
    cy.get("p").should("exist");            
    cy.contains("Description:").should("exist");
    cy.get("img").first().should("be.visible");

    cy.get("[data-testid='movie-genres']").should("exist");
    cy.get("[data-testid='movie-photos']").should("exist");
    cy.get("[data-testid='movie-reviews']").should("exist");
    cy.get("[data-testid='movie-discussions']").should("exist");
  });

  it("opens Review Form & submits", () => {
    cy.contains("Write review").click();

    cy.contains("Write your review").should("exist");

    cy.get("textarea").type("E2E Test Review");

    cy.contains("button", "Send").click();

    cy.contains("Write your review").should("not.exist");
  });




  it("opens Discussion Form & submits", () => {
    cy.contains("Start discussion").click();

    cy.contains("Write discussion topic").should("exist");

    cy.get("input[placeholder='Discussion title']").type("E2E Test Discussion");

    cy.contains("button", "Create").click();

    cy.contains("Write discussion topic").should("not.exist");
  });

  it("adds/removes favourites", () => {
    cy.contains(/favourite/i).then(($btn) => {
      const label = $btn.text();

      cy.wrap($btn).click();

      if (label.includes("Add")) {
        cy.contains("Delete from favourites", { timeout: 5000 }).should("exist");
      } else {
        cy.contains("Add to favourites", { timeout: 5000 }).should("exist");
      }
    });
  });

  it("adds/removes watchlist", () => {
    cy.contains(/watchlist/i).then(($btn) => {
      const label = $btn.text();

      cy.wrap($btn).click();

      if (label.includes("Add")) {
        cy.contains("Delete from watchlist", { timeout: 5000 }).should("exist");
      } else {
        cy.contains("Add to watchlist", { timeout: 5000 }).should("exist");
      }
    });
  });

  it("allows dragging scrollable lists", () => {
    const lists = [
        "movie-genres",
        "movie-photos",
        "movie-reviews",
        "movie-discussions"
    ];

    lists.forEach((testId) => {
        cy.get(`[data-testid="${testId}"]`)
        .trigger("mousedown", { clientX: 300, clientY: 100, force: true })
        .trigger("mousemove", { clientX: 100, clientY: 100, force: true })
        .trigger("mouseup", { force: true })
        .should("exist");
    });
    });

});
