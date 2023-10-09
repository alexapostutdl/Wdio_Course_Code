import { MainPage } from "../page-objects/mainPage";


class Pages {
    constructor(){
        this.mainPage = new MainPage()
 
    }
}

export const pages = new Pages()