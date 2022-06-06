///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)            
        })
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Rita', 'Castro', 'google', 'Brasil', 'Endereço', '2888', 'Fortaleza', 'Ceará', '63544-000', '88966889909', 'paulojose@mail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});