import { MainPage } from "../page-objects/mainPage";
import { Registrationpage } from "../page-objects/registrationPage";


class Pages {
    constructor(){
        this.mainPage = new MainPage()
        this.registrationPage = new Registrationpage()
 
    }
}

export const pages = new Pages()