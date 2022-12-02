

import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";
const logInPage = require('../../../Pages/landing')


Given('Appliction up and Running',()=>{
    cy.visit("/")
})

When('try to login with email as {string} and password as {string}',(email,password)=>{
    logInPage.typeEmailAndPwd(email,password)
})

Then('user should able to login to the application',()=>{
    logInPage.verifySuccessMsg()  
})

Then('error message should display',()=>{
    logInPage.VerifyErrorMsg()
})