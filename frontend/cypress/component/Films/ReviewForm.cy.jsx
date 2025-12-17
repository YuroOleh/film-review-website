import { mount } from "cypress/react";
import ReviewForm from "../../../src/components/Films/ReviewForm";

describe("ReviewForm component", () => {
    it("renders correctly", () => {
        const onClose = cy.stub();
        mount(<ReviewForm filmId={1} onClose={onClose} />);

        cy.contains("Write your review").should("exist");
        cy.get('[data-testid="review-textarea"]').should("exist");
        cy.get('[data-testid="review-slider"]').should("exist");
        cy.contains("Return").should("exist");
        cy.contains("Send").should("exist");
    });

    it("updates text and slider", () => {
        const onClose = cy.stub();
        mount(<ReviewForm filmId={1} onClose={onClose} />);

        cy.get('[data-testid="review-textarea"]').type("Great movie!");
        cy.get('[data-testid="review-slider"]').invoke("val", 4).trigger("change", { force: true });
        cy.get('[data-testid="review-textarea"]').should("have.value", "Great movie!");
    });

    it("calls onClose when Return button clicked", () => {
        const onClose = cy.stub();
        mount(<ReviewForm filmId={1} onClose={onClose} />);

        cy.contains("Return").click({ force: true }).then(() => {
            expect(onClose).to.have.been.called;
        });
    });
});
