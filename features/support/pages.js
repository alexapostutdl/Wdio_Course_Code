import { CheckoutPage } from "../page-objects/checkoutPage";
import { LoginPage } from "../page-objects/loginPage";
import { MainPage } from "../page-objects/mainPage";
import { Registrationpage } from "../page-objects/registrationPage";
import { ShoppingCartPage } from "../page-objects/shoppingCartPage";


class Pages {
    constructor(){
        this.mainPage = new MainPage()
        this.registrationPage = new Registrationpage()
        this.loginPage = new LoginPage()
        this.shoppingCartPage = new ShoppingCartPage()
        this.checkoutPage = new CheckoutPage()
 
    }
}

export const pages = new Pages()