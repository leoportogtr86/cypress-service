///<reference types="cypress"/>

describe('Método PATCH', () => {
    before(() => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/pessoas/12',
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
                id: 12
            }
        }).as('addPessoa')
    })
    it('Deve Modificar o Dado de 1 Pessoa', () => {
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8080/pessoas/12',
            headers: { 'Accept-Language': 'en-us', },
            body: {
                idade: 21,
            }
        }).as('patchPessoa')
            .then((res) => {
                expect(res.body.idade).equal(21);
                expect(res.body.id).equal(12);
                expect(res.body.nome).equal("Peppa");
            })

        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8080/pessoas/12',
            headers: { 'Accept-Language': 'en-us', },
            body: {
                nome: 'George',
            }
        }).as('patchPessoa')
            .then((res) => {
                expect(res.body.idade).equal(21);
                expect(res.body.id).equal(12);
                expect(res.body.nome).equal("George");
            })
    });
});