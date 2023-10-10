import { LoginPage } from "../page-objects/loginPage";
import { MainPage } from "../page-objects/mainPage";
import { Registrationpage } from "../page-objects/registrationPage";


class Pages {
    constructor(){
        this.mainPage = new MainPage()
        this.registrationPage = new Registrationpage()
        this.loginPage = new LoginPage()
 
    }
}

export const pages = new Pages()