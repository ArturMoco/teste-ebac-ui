///<reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login - Exercicio', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username')
            .type('arturmoco1991@gmail.com', {log: false})
        cy.get('#password')
            .type('#Moco36961200', {log: false})
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.page-title')
            .should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, arturmoco1991')
    })

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username')
            .type(perfil.usuario, {log: false})
        cy.get('#password')
            .type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.page-title')
            .should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, arturmoco1991')

    });

    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil')
            .then(dados => {
                cy.get('#username')
                    .type(dados.usuario, {log: false})
                cy.get('#password')
                    .type(dados.senha, {log: false})
                cy.get('.woocommerce-form > .button')
                    .click()

                cy.get('.page-title')
                    .should('contain', 'Minha conta')
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
                    .should('contain', 'Olá, arturmoco1991')


            })

    });

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username')
            .type('mocoartur@g.com')
        cy.get('#password')
            .type('#Moco36961200')
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error > li')
            .should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username')
            .type('arturmoco1991@gmail.com')
        cy.get('#password')
            .type('exercicioteste@teste')
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error > li')
            .should('contain', 'Erro: A senha fornecida para o e-mail arturmoco1991@gmail.com está incorreta. ')
    })
})