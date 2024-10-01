/// <reference types="cypress" />

context('Cadastro de Entradas', () => {
    it.only('Cadastrar entradas', () => {
        cy.visit('https://devfinance-agilizei.netlify.app')

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Presente')  // id
        cy.get('[name=amount]').type(12)       // atributos
        cy.get('[type=date]').type('2021-03-17') // atributos, formato de data 'YYYY-MM-DD'
        cy.get('button').contains('Salvar').click() // tipo e valor
    });

    //Cadastrar saídas

   it ('Cadastro de saídas', () => {

    cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Presente')  // id
        cy.get('[name=amount]').type(-12)       // atributos
        cy.get('[type=date]').type('2021-03-17') // atributos, formato de data 'YYYY-MM-DD'
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get ('#data-table tbody tr').should('have.length', 1)
   });

   
    //Remover entradas e saídas
// Remover entradas e saídas
it.only('Remover entradas e saídas', () => {
    cy.visit('https://devfinance-agilizei.netlify.app');
  
    const entrada = 'Mesada';
    const saida = 'KinderOvo';
  
    // Adicionar entrada
    cy.get('#transaction .button').click(); // id + classe
    cy.get('#description').type(entrada);  // id
    cy.get('[name=amount]').type(100);       // atributos
    cy.get('[type=date]').type('2021-03-21'); // atributos, formato de data 'YYYY-MM-DD'
    cy.get('button').contains('Salvar').click(); // tipo e valor
  
    // Adicionar saída
    cy.get('#transaction .button').click(); // id + classe
    cy.get('#description').type(saida);  // id
    cy.get('[name=amount]').type(-35);       // atributos
    cy.get('[type=date]').type('2021-03-21'); // atributos, formato de data 'YYYY-MM-DD'
    cy.get('button').contains('Salvar').click(); // tipo e valor
  
    // Remover entrada
    cy.contains(entrada)
      .parent()
      .find('img[onclick*=remove]')
      .click();
  
    // Remover saída
    cy.contains(saida)
      .parent()
      .find('img[onclick*=remove]')
      .click();
  });
  
  
});
