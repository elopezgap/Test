export class Assignment3{
    url = 'http://localhost:3000/signin'

    elements = {
        // Real World App side menu element
        getUserConfirmation: () => cy.get('h6[data-test="sidenav-username"]'),

        // Create Bank Account elements
        getBankAccountsBtn: () => cy.get('span.MuiTypography-root'),
        getCreateBankAccountBtn: () => cy.get('.MuiButton-label'),
        getBankNameTxt: () => cy.get('#bankaccount-bankName-input'),
        getRoutingNumberTxt: () => cy.get('#bankaccount-routingNumber-input'),
        getAccountNumberTxt: () => cy.get('#bankaccount-accountNumber-input'),
        getSaveBtn: () => cy.get('button[data-test="bankaccount-submit"]'),
        getBankAccountCreated: () => cy.get('li.MuiListItem-root'),
        getBankAccountLbl: () => cy.get('div.MuiGrid-root p'),
        getDeleteBankAccountBtn: () => cy.get('button[data-test="bankaccount-delete"]'),
        getBankAccountDeleted: () => cy.get('p.MuiTypography-root'),
    }

    createBankAccount(bankName, routingNumber, accountNumber){
        //Access Bank Accounts section from the side menu
        this.elements.getBankAccountsBtn().contains('Bank Accounts').click();

        //Click on Create button
        this.elements.getCreateBankAccountBtn().contains('Create').click();

        //Fill the inputs with the information of the variables and then click on Save
        this.elements.getBankNameTxt().type(bankName);
        this.elements.getRoutingNumberTxt().type(routingNumber);
        this.elements.getAccountNumberTxt().type(accountNumber);
        this.elements.getSaveBtn().contains('Save').click();
    }

    deleteBankAccount(bankName){
        //Access Bank Accounts section from the side menu
        this.elements.getBankAccountsBtn().contains('Bank Accounts').click();
        this.elements.getBankAccountLbl().invoke('text').should('includes', bankName);
        
        this.elements.getDeleteBankAccountBtn().last().click();
        

        
    }


}

export const NewAssignment3 = new Assignment3();
