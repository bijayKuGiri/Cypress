class landing{ 
    
    elements={
        txtUserEmail:() =>cy.get('input[name=email]'),
        txtPassword:() =>cy.get('input[name=password]'),
        btnSubmit:() =>cy.get('span.MuiButton-label'),
        lblMsgDetails:() =>cy.get('div.css-8najj4')
    }

    typeEmailAndPwd(email,password){
        this.elements.txtUserEmail().type(email)
        this.elements.txtPassword().type(password)
        this.elements.btnSubmit().click()
    }

    verifySuccessMsg(){
        this.elements.lblMsgDetails().should("have.text","One-time passcode is algorithmically invalid. Must be 4 digits and be used within 300 seconds (5 mins).")
    }

    VerifyErrorMsg(){
        this.elements.lblMsgDetails().should("have.text","There was a problem with the current session. Please login again or contact support team.")
    }

    
}
module.exports = new landing();