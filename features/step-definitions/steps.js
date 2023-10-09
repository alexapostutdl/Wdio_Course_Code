import {Given, When, Then} from '@wdio/cucumber-framework';
import { tests } from '../support/tests';


Given("User opens the main page", async()=>{
    await tests.mainPageTest.openMainpage()
})

When("User opens the registration page", async()=>{
    await tests.mainPageTest.openRegistrationPage()
})

When("User fills in the registration", async()=>{
    YYYYYY
})

Then("User successfully registers", async()=>{
    
})