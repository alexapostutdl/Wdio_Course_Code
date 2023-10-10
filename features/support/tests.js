import { LoginPageTest } from "../test-objects/loginPageTest";
import { MainPageTest } from "../test-objects/mainPageTest";
import { RegistrationPageTest } from "../test-objects/registrationPageTest";
import { ShoppingCartTest } from "../test-objects/shoppingCartTest";

class Tests{
    constructor(){
        this.mainPageTest = new MainPageTest()
        this.registrationPageTest = new RegistrationPageTest()
        this.loginPageTest = new LoginPageTest()
        this.shoppingCartTest = new ShoppingCartTest()
        
    }   
}

export const tests = new Tests()