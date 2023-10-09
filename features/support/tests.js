import { MainPageTest } from "../test-objects/mainPageTest";
import { RegistrationPageTest } from "../test-objects/registrationPageTest";

class Tests{
    constructor(){
        this.mainPageTest = new MainPageTest()
        this.registrationPageTest = new RegistrationPageTest()
    }   
}

export const tests = new Tests()