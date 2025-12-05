import { mount } from "cypress/react";
import Review from "../../../src/components/Reviews/Review";

describe("Review component via testing prop", () => {
    const review = {
        id: 1,
        text: "Awesome review!",
        rating: 5,
        created_at: "2025-12-05"
    };

    const testing = {
        user: { id: 1, username: "Oleg"}
    };

    it("renders review and user correctly", () => {
        mount(<Review review={review} testing={testing} />);

        cy.contains("Oleg").should("exist");
        cy.contains("Awesome review!").should("exist");
        cy.get('img[src="/icons/star.png"]').should("exist");

        const formattedDate = new Date(review.created_at).toLocaleDateString("uk-UA");
        cy.contains(formattedDate).should("exist");
        cy.get('img[src="/icons/calendar.png"]').should("exist");
    });
});