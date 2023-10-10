import { pages } from "../support/pages";
import { data } from "../support/data";



export class RegistrationPageTest{
    async userFillsInTheRegistration(){
        await pages.registrationPage.getGender(await data.userData.newUser.gender).click()
        await pages.registrationPage.getFirstName().setValue(await data.userData.newUser.firstName)
        await pages.registrationPage.getLastName().setValue(await data.userData.newUser.lastName)
        await pages.registrationPage.getBirthDate('Day').selectByAttribute('value',await data.userData.newUser.birthDay)
        await pages.registrationPage.getBirthDate('Month').selectByAttribute('value',await data.userData.newUser.birthMonth)
        await pages.registrationPage.getBirthDate('Year').selectByAttribute('value',await data.userData.newUser.birthYear)
        await pages.registrationPage.getEmail().setValue(await data.userData.newUser.email)
        await pages.registrationPage.getCompany().setValue(await data.userData.newUser.company)
        await pages.registrationPage.getPassword().setValue(await data.userData.newUser.password)
        await pages.registrationPage.getConfirmPassword().setValue(await data.userData.newUser.password)
        await pages.registrationPage.getRegisterButton().click()
    } 

    async userAssertsRegistration(){

        await expect(pages.registrationPage.confirmRegistration()).toHaveText('Your registration completed')

    }
}