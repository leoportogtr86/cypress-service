///<reference types="cypress"/>

describe('Método GET', () => {
    it('Deve Trazer Várias Pessoas na Resposta', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/pessoas',
            headers: { 'Accept-Language': 'en-us', },
        })
            .then((res) => {
                expect(res.body).not.be.null;
                expect(res.body.length).to.be.greaterThan(1);
                expect(res.body[0]).to.haveOwnProperty('id');
                expect(res.body[0]).to.haveOwnProperty('nome');
                expect(res.body[0]).to.haveOwnProperty('idade');
            })
    });
});