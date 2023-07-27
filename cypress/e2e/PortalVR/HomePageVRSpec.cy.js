/// <reference types="Cypress"/>

describe('Navegação até a seção "Pra Você" e clique no botão "Onde usar meu cartão VR"', () => {
  it('Deve acessar o menu "Pra Você" e clicar no botão "Onde usar meu cartão VR"', () => {
    cy.viewport(1920, 1080); // Adequa a tela para melhor visualização
    cy.visit("https://www.vr.com.br/"); // Acessa o Site da VR

    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click(); // Aceitar os termos e condições (se necessário).
    cy.get(':nth-child(3) > .vr-main-navigation__link').click(); // Navegar até a seção "Pra Você".
    cy.get('.vr-button--negative').click(); // Clicar no botão "Onde usar meu cartão VR".
    cy.scrollTo('bottom'); // Role a página para baixo para garantir que o mapa do Google esteja visívell.
  });
});

describe('Navegação até a seção "Pra Você", clique no botão "Onde usar meu cartão VR" e valide a abertura do mapa do Google', () => {
  it('Deve acessar o menu "Pra Você", clicar no botão "Onde usar meu cartão VR" e validar a abertura do mapa do Google', () => {
    cy.viewport(1920, 1080); // Adequa a tela para melhor visualização.
    cy.visit("https://www.vr.com.br/"); // Acessa o Site da VR . 

    cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click(); // Aceitar os termos e condições (se necessário).
    cy.get(':nth-child(3) > .vr-main-navigation__link').click(); // Navegar até a seção "Pra Você".
    cy.get('.vr-button--negative').click(); // Clicar no botão "Onde usar meu cartão VR".

    cy.scrollTo('bottom'); // Role a página para baixo para garantir que o mapa do Google esteja visível.

    cy.get('.vr-section-map__title').should('contain', 'Rede credenciada'); // Validação do elemento que contém o mapa do Google.
    cy.contains('Conheça todos os estabelecimentos que aceitam VR').first().trigger('focus'); // Focus para centralizar o mapa na tela.
  });
});
