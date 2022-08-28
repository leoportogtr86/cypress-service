///<reference types="cypress"/>

describe('Método DELETE', () => {
    before(() => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/pessoas',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false,
            body: {
                id: 1,
                nome: 'Desconhecido',
                idade: 56
            }
        }).as('addPessoa')
            .then((res) => {
            })
    })
    it('Deve Deletar 1 Pessoa', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoas/1',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false
        }).as('removePessoa')
            .then((res) => {
                expect(res.isOkStatusCode).eq(true);
                expect(res.status).eq(200);
            })
    });

    after(() => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/pessoas/1',
            headers: { 'Accept-Language': 'en-us', },
            failOnStatusCode: false
        }).as('findPessoa')
            .then((res) => {
                expect(res.status).eq(404);
            })
    })
});