import { mount } from "cypress/react";
import Pagination from "../../../src/components/shared/Pagination";

describe("Pagination component", () => {
  it("renders pagination for 5 pages with current page 1", () => {
    mount(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
      />
    );

    cy.contains("1").should("exist");
    cy.contains("2").should("exist");
    cy.contains("3").should("exist");
    cy.contains("5").should("exist");
    cy.get('button[disabled]').should("exist"); 
  });

  it("renders pagination for middle page", () => {
    mount(
      <Pagination
        currentPage={3}
        totalPages={7}
        onPageChange={() => {}}
      />
    );

    cy.contains("1").should("exist"); 
    cy.contains("2").should("exist");
    cy.contains("3").should("exist");
    cy.contains("4").should("exist");
    cy.contains("7").should("exist"); 
    cy.contains("...").should("exist");
  });

  it("calls onPageChange when clicking page buttons", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");

    mount(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );

    cy.contains("1").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 1);

    cy.contains("3").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 3);

    cy.contains("5").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 5);
  });

  it("handles edge cases for few pages (2 pages)", () => {
    const onPageChange = cy.spy().as("onPageChangeSpy");

    mount(
      <Pagination
        currentPage={1}
        totalPages={2}
        onPageChange={onPageChange}
      />
    );

    cy.contains("1").should("exist");
    cy.contains("2").should("exist");
    cy.get('button[disabled]').should("exist"); 
    cy.contains("2").click();
    cy.get("@onPageChangeSpy").should("have.been.calledWith", 2);
  });
});
