import { mount } from "cypress/react";
import Sort from "../../../src/components/shared/Sort";

describe("Sort component", () => {
  const options = ["Name", "Rating", "Release date", "Length", "Date", "Messages", "Likes", "Dislikes", "Views"];

  it("renders sort and order selects", () => {
    mount(<Sort options={options} onSortChange={() => {}} onOrderChange={() => {}} />);
    
    cy.get("select").should("have.length", 2);
    options.forEach(option => {
      cy.get("select").first().contains(option);
    });
    cy.get("select").last().contains("Ascending");
    cy.get("select").last().contains("Descending");
  });

  it("calls onSortChange for all sort options", () => {
    const onSortChangeSpy = cy.spy().as("onSortChangeSpy");
    mount(<Sort options={options} onSortChange={onSortChangeSpy} onOrderChange={() => {}} />);

    const mapping = {
      "Name": "title",
      "Rating": "rating",
      "Release date": "published",
      "Length": "length",
      "Date": "created_at",
      "Messages": "message_count",
      "Likes": "likes",
      "Dislikes": "dislikes",
      "Views": "views"
    };

    cy.get("select").first().select("Rating");

    Object.entries(mapping).forEach(([label, value]) => {
      cy.get("select").first().select(label).then(() => {
        cy.get("@onSortChangeSpy").should("have.been.calledWith", value);
      });
    });
  });

  it("calls onOrderChange for Ascending and Descending", () => {
    const onOrderChangeSpy = cy.spy().as("onOrderChangeSpy");
    mount(<Sort options={options} onSortChange={() => {}} onOrderChange={onOrderChangeSpy} />);

    cy.get("select").last().select("Ascending");
    cy.get("@onOrderChangeSpy").should("have.been.calledWith", "asc");

    cy.get("select").last().select("Descending");
    cy.get("@onOrderChangeSpy").should("have.been.calledWith", "desc");
  });
});
