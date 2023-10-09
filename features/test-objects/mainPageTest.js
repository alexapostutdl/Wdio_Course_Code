import { pages } from "../support/pages";

export class MainPageTest{

    async openMainpage(){
        await browser.url('https://demoqa.com/')
        await pages.mainPage.getMainPageBody().waitForExist()
    }

}