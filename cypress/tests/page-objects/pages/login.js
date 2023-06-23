export class Login{
    url = 'http://localhost:3000/signin';

    elements = {
        // Sign In page elements
        getUsername: () => cy.get('#username'),
        getPassword: () => cy.get('#password'),
        getSignInBtn: () => cy.get('.MuiButton-label'),

        // Real World App side menu element
        getLogoutBtn: () => cy.get('span.MuiTypography-root'),
    }

    signIn(username, password){
        // Fill up sign in form
        this.elements.getUsername().clear().type(username);
        this.elements.getPassword().clear().type(password);
        this.elements.getSignInBtn().click();  
    }

    logOut(){
        // Click Logout button from the side menu
        this.elements.getLogoutBtn().contains('Logout').click();
    }


}

export const NewLogin = new Login();