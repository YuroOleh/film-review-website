import { mount } from "cypress/react";
import Pagination from "../../../src/components/shared/Pagination";

describe("Pagination component", () => {
  const mountPagination = (currentPage, onPageChange = () => {}, totalPages = 5) => {
    mount(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );
  };

  it("renders first page correctly", () => {
    mountPagination(1, () => {}, 5);

    cy.contains("1").should("exist");
    cy.contains("2").should("exist");
    cy.contains("3").should("exist");
    cy.contains("5").should("exist");
    cy.get('button[disabled]').should("exist");
  });

  it("renders middle page correctly", () => {
    mountPagination(3, () => {}, 7);

    cy.contains("1").should("exist");
    cy.contains("2").should("exist");
    cy.contains("3").should("exist");
    cy.contains("4").should("exist");
    cy.contains("7").should("exist");
    if (3 - 3 >= 1 && 7 > 4) cy.contains("...").should("exist");
  });

  it("renders last page correctly", () => {
    mountPagination(5, () => {}, 5);

    cy.contains("1").should("exist");
    cy.contains("3").should("exist");
    cy.contains("4").should("exist");
    cy.contains("5").should("exist");
    cy.get('button[disabled]').should("exist");
  });

  it("calls onPageChange when clicking page number buttons", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");
    mountPagination(2, onPageChange, 5);

    cy.contains("1").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 1);

    cy.contains("3").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 3);

    cy.contains("5").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 5);
  });

  it("calls onPageChange for prev/next buttons", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");
    mountPagination(3, onPageChange, 5);

    cy.get('button').eq(1).click({ force: true });
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 2);

    cy.get('button').eq(-2).click({ force: true });
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 4);
  });

  it("calls onPageChange for first/last buttons", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");
    mountPagination(3, onPageChange, 5);

    cy.get('button').first().click({ force: true });
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 1);

    cy.get('button').last().click({ force: true });
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 5);
  });

  it("handles edge case of 2 pages", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");
    mountPagination(1, onPageChange, 2);

    cy.contains("1").should("exist");
    cy.contains("2").should("exist");
    cy.get('button[disabled]').should("exist");
    cy.contains("2").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 2);
  });
});
