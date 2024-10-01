/// <reference types="cypress" />
context('', () => {
    it('Cadastrar entradas', () => {

        cy.visit('https://devfinance-agilizei.netlify.app')

cy.get ('#transaction .button').click //id + classe
cy.get ('#description').type('Mesada')      //id
cy.get ('[name=amount]').type(12) //atributos
cy.get ('[type=date]').type('17/03/2021')  //atributos
cy.get ('button').contains('Salvar').click//tipo e valor


    });
//Cadastrar saídas
//Remover entradas e saídas



});