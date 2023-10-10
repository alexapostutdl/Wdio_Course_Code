import { pages } from "../support/pages";

export class MainPageTest{

    async openMainpage(){
        await browser.url('https://demo.nopcommerce.com/')
        await pages.mainPage.validateMainPage().waitForExist()
    }

    async openRegistrationPage(){
        await pages.mainPage.registerButton().click()
    }

    

}