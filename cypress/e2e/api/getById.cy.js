///<reference types="cypress"/>

describe('Método GET Por Id', () => {
    it('Deve Trazer 1 Pessoa na Resposta', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/pessoas/5',
            headers: { 'Accept-Language': 'en-us', },
        })
            .then((res) => {
                expect(res.body).not.be.null;
                expect(res.body.id).to.be.equal(5);
                expect(res.body.nome).to.be.equal("Abel");
                expect(res.body.idade).to.be.equal(10);
            })
    });
});