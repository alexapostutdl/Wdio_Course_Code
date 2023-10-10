export class Registrationpage{

    getGender(gender){
        return $(`.${gender}`)
    }

    getFirstName(){
        return $('[name="FirstName"]')
    }

    getLastName(){
        return $('[name="LastName"]')
    }

    getBirthDate(date){
        return $(`[name="DateOfBirth${date}"]`)
    }

    getEmail(){
        return $('[type="email"]')
    }

    getCompany(){
        return $('#Company')
    }

    getPassword(){
        return $('#Password')
    }
    
    getConfirmPassword(){
        return $('#ConfirmPassword')
    }

    getRegisterButton(){
        return $('.buttons [type="submit"]')
    }

    confirmRegistration(){
        return $('.page-body .result')
    }

}