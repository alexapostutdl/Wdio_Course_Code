import { pages } from "../support/pages";
import { data } from "../support/data";

export class LoginPageTest{

    async login(){

        await pages.loginPage.getLoginButton().click()
        await pages.loginPage.getLoginEmail().setValue(await data.userData.newUser.email)
        await pages.loginPage.getLoginPassword().setValue(await data.userData.newUser.password)
        await pages.loginPage.getLogin().click()
        await pages.loginPage.getMyAccountButton().waitForExist()
    }

}