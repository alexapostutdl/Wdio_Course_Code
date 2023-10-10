import {Given, When, Then} from '@wdio/cucumber-framework';
import { tests } from '../support/tests';

Then("Users logs in", async()=>{
    await tests.loginPageTest.login()
})