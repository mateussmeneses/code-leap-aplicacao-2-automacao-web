/// <reference types="cypress" />

const { types } = require("mime-types");


describe('Testing Signup page', () => {
    it('Must create new user and Post something', () => {
        cy.visit('http://localhost:3000') // surf the website
        cy.get('input').type('mateus') // click input username and type your username
        cy.get('.sc-hKMtZM').click() // click "enter" button
        cy.wait(1000) // wait milliseconds
        cy.get('input').type('hello world') // writing title
        cy.get('textarea').type('some content') // writing content
        cy.get('.sc-bczRLJ').click() //click create post
        cy.get('.sc-evZas > :nth-child(1) > .sc-gKXOVf').contains('hello world') // verify if the message was created
    });
    it('Must create new user, Post something and delete Post created', () => {
        cy.visit('http://localhost:3000') // surf the website
        cy.get('input').type('mateus') // click input username and type your username
        cy.get('.sc-hKMtZM').click() // click "enter" button
        cy.wait(2000) // wait milliseconds
        cy.get('input').type('hello world') // writing title
        cy.get('textarea').type('some content') // writing content
        cy.get('.sc-bczRLJ').click() //click create post
        cy.get('.sc-evZas > :nth-child(1) > .sc-gKXOVf').contains('hello world') // verify if the message was created
        cy.get('#__next > div.sc-kDDrLX.kgRFZG > div > main > section > div:nth-child(1) > div > div > button:nth-child(1) > svg').click() // click delete
        cy.get('.sc-hKMtZM > div > :nth-child(2)').click() //confirm delete
        cy.get('.go2072408551').contains('Item was successfully deleted.') // verify if message was deleted
    });
    it('Must create new user, Post something and edit Post created', () => {
        cy.visit('http://localhost:3000') // surf the website
        cy.get('input').type('mateus') // click input username and type your username
        cy.get('.sc-hKMtZM').click() // click "enter" button
        cy.wait(2000) // wait milliseconds
        cy.get('input').type('hello world') // writing title
        cy.get('textarea').type('some content') // writing content
        cy.get('.sc-bczRLJ').click() //click create post
        cy.get('.sc-evZas > :nth-child(1) > .sc-gKXOVf').contains('hello world') // verify if the message was created
        cy.get('#__next > div.sc-kDDrLX.kgRFZG > div > main > section > div:nth-child(1) > div > div > button:nth-child(2) > svg').click() //click edit
        cy.get('.sc-jSMfEi > :nth-child(2) > input').clear().type('tile changed') //editing title
        cy.get('.sc-jSMfEi > :nth-child(3) > textarea').clear().type('content changed') // editing content
        cy.get('.sc-jSMfEi > .sc-bczRLJ').click() // click save edit
        cy.get('.go3958317564').contains('Item was successfully updated.') // verify if post was edited
    });
    it('Must logoff', () => {
        cy.visit('http://localhost:3000') // surf the website
        cy.get('input').type('mateus') // click input username and type your username
        cy.get('.sc-hKMtZM').click() // click "enter" button
        cy.wait(2000) // wait milliseconds
        cy.get('#__next > div.sc-kDDrLX.kgRFZG > div > div > button > svg').click() // click logoff
        cy.get('h1').contains('Welcome to CodeLeap network!') // verify if the user was logout
    });

});
