import { mount } from "cypress/react";
import DiscussionForm from "../../../src/components/Films/DiscussionForm";

describe("DiscussionForm component via testing prop", () => {
    it("renders form correctly and buttons work", () => {
        let returned = false;
        let created = false;

        const onClose = () => { returned = true };
        const createDiscussion = () => { created = true };

        const testing = {
            user: { id: 1, username: "Oleg"},
            createDiscussion
        };

        mount(<DiscussionForm filmId={1} onClose={onClose} testing={testing} />);

        cy.contains("Write discussion topic").should("exist");
        cy.get('input').should("have.attr", "placeholder", "Discussion title");
        cy.contains("Return").click().then(() => {
            expect(returned).to.be.true;
        });

        cy.get('input').type("New Discussion");
        cy.contains("Create").click().then(() => {
            expect(created).to.be.true;
            expect(returned).to.be.true; 
        });
    });
});
