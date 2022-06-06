/// <reference types="cypress" />

describe('Exercicio - Funcionalidade da caixa de pesquisa', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('teste busca', () => {
        cy.get('.search')
            .type('Shorts')
        cy.contains('Search ')
            .click({ force: true })
        cy.get('.page-title')
            .should('contain', 'RESULTADOS DA PESQUISA POR: “SHORTS”')

    });

});