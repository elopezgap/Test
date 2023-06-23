const { response } = require("express");

const apiBankAccounts = `${Cypress.env("apiUrl")}/bankAccounts`;

describe('API Bank Account tests ', function () {
    let bankAccountID = [];
    let transactionID;

    beforeEach(function () {
        cy.login('Katharina_Bernier', 's3cret',{rememberUser:true});
    })

    //Create Bank Accounts
    it('should create Bank Accounts', () => {
        for(let i=0; i < 5; i++){
            cy.request("POST",`${apiBankAccounts}`,{
                "bankName": "APIBankTest"+i,
                "accountNumber": "123456789"+i,
                "routingNumber": "123123123"+i
            }).then((response) => {bankAccountID.push(response.body.account.id);
            expect(response.status).to.eq(200);
            })
        }
    })


    
})