///<reference types="cypress"/>

describe('Método POST', () => {
    before(() => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoas/1',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false
        }).as('removePessoa')
    })
    it('Deve Inserir 1 Pessoa', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/pessoas',
            headers: { 'Accept-Language': 'en-us', },
            body: {
                nome: "Peppa",
                idade: 10,
                id: 1
            }
        }).as('addPessoa')
            .then((res) => {
                expect(res.body.nome).equal("Peppa");
                expect(res.body.idade).equal(10);
                expect(res.body.id).equal(1);
            })
    });
});