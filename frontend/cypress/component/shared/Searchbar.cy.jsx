import { mount } from "cypress/react";
import Searchbar from "../../../src/components/shared/Searchbar";

describe("Searchbar component", () => {
  it("renders input with placeholder", () => {
    mount(<Searchbar placeholder="Search here" />);
    cy.get("input").should("have.attr", "placeholder", "Search here");
  });

  it("updates input value on change", () => {
    mount(<Searchbar placeholder="Search here" />);
    cy.get("input").type("Hello").should("have.value", "Hello");
  });

  it("calls onSearch when Enter is pressed", () => {
    const onSearchSpy = cy.spy().as("onSearchSpy");
    mount(<Searchbar placeholder="Search" onSearch={onSearchSpy} />);
    cy.get("input").type("Test{enter}");
    cy.get("@onSearchSpy").should("have.been.calledWith", "Test");
  });

  it("toggles filter menu", () => {
    mount(
      <Searchbar
        placeholder="Search"
        showFilter={true}
        FilterComponent={<div>Filter Content</div>}
      />
    );
    cy.contains("Filter").click();
    cy.contains("Filter Content").should("exist");
    cy.contains("Filter").click();
    cy.contains("Filter Content").should("not.exist");
  });

  it("toggles sort menu", () => {
    mount(
      <Searchbar
        placeholder="Search"
        SortComponent={<div>Sort Content</div>}
      />
    );
    cy.contains("Sort").click();
    cy.contains("Sort Content").should("exist");
    cy.contains("Sort").click();
    cy.contains("Sort Content").should("not.exist");
  });
});