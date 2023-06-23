/// <reference types="cypress" />

describe('Real World app tests', () => {
    //Variables used for the test
    let UUID = '1' + Math.random().toString();
    let BANK_NAME = 'Esteban Test Bank Account' + UUID;
    let ROUTING_NUMBER = '111111111';
    let ACCOUNT_NUMBER = '012345678912';

   beforeEach(()=> {
       cy.visit('http://localhost:3000/signin');
       cy.get('#username').clear().type('Katharina_Bernier');
       cy.get('#password').clear().type('s3cret');
       cy.get('.MuiButton-label').click();
       cy.get('h6[data-test="sidenav-username"]').should('have.text', '@Katharina_Bernier');
   })

   it('Automation of the Create a Bank Account flow', () => {
       //Access Bank Accounts section
       cy.get('span.MuiTypography-root').contains('Bank Accounts').click();

       //Click on Create button
       cy.get('a.MuiButtonBase-root').contains('Create').click();

       //Fill the inputs with the information of the variables and then click on Save
       cy.get('#bankaccount-bankName-input').clear().type(BANK_NAME);
       cy.get('#bankaccount-routingNumber-input').clear().type(ROUTING_NUMBER);
       cy.get('#bankaccount-accountNumber-input').clear().type(ACCOUNT_NUMBER);
       cy.get('button[data-test="bankaccount-submit"]').contains('Save').click();

       //Verify thet the Bank Name has been added to the list
       cy.get('li.MuiListItem-root').invoke('text').should('includes', BANK_NAME);
   
   })

   it('Automation of the Delete a Bank Account flow', () => {
       //Access Bank Accounts section
       cy.get('span.MuiTypography-root').contains('Bank Accounts').click();
       cy.get('div.MuiGrid-root p').contains(BANK_NAME);
       
       //Delete the Bank that has been created previously
       cy.get('button[data-test="bankaccount-delete"]').last().click();
       cy.get('p.MuiTypography-root').invoke('text').should('includes', '(Deleted)');
   })

   after(()=> {
       cy.get('span.MuiTypography-root').contains('Logout').click();
   })

})
