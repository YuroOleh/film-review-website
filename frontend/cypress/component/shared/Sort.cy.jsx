import { mount } from "cypress/react";
import Sort from "../../../src/components/shared/Sort";

describe("Sort component", () => {
  const options = ["Name", "Rating", "Release date"];

  it("renders sort and order selects", () => {
    mount(<Sort options={options} onSortChange={() => {}} onOrderChange={() => {}} />);
    
    cy.get("select").should("have.length", 2);
    cy.get("select").first().contains("Name");
    cy.get("select").first().contains("Rating");
    cy.get("select").first().contains("Release date");
    cy.get("select").last().contains("Ascending");
    cy.get("select").last().contains("Descending");
  });

  it("calls onSortChange when selecting sort option", () => {
    const onSortChangeSpy = cy.spy().as("onSortChangeSpy");
    mount(<Sort options={options} onSortChange={onSortChangeSpy} onOrderChange={() => {}} />);
    
    cy.get("select").first().select("Rating");
    cy.get("@onSortChangeSpy").should("have.been.calledWith", "rating");

    cy.get("select").first().select("Release date");
    cy.get("@onSortChangeSpy").should("have.been.calledWith", "published");
  });

  it("calls onOrderChange when selecting order option", () => {
    const onOrderChangeSpy = cy.spy().as("onOrderChangeSpy");
    mount(<Sort options={options} onSortChange={() => {}} onOrderChange={onOrderChangeSpy} />);
    
    cy.get("select").last().select("Ascending");
    cy.get("@onOrderChangeSpy").should("have.been.calledWith", "asc");

    cy.get("select").last().select("Descending");
    cy.get("@onOrderChangeSpy").should("have.been.calledWith", "desc");
  });
});