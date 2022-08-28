///<reference types="cypress"/>

describe('Método UPDATE', () => {
    before(() => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoas/10',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false
        }).as('removePessoa')

        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/pessoas',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false,
            body: {
                nome: "Peppa",
                idade: 10,
                id: 10
            }
        }).as('addPessoa')
    });

    it('Deve Atualizar os Dados da Pessoa', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:8080/pessoas/10',
            headers: { 'Accept-Language': 'en-us', },
            body: {
                nome: "Mirna",
                idade: 50,
                id: 10
            }
        }).as('updatePessoa')
            .then((res) => {
                expect(res.body.nome).equal("Mirna");
                expect(res.body.idade).equal(50);
            })
    });
});