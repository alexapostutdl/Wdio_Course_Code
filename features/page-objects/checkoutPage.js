export class CheckoutPage{

    getCountry(){
        return $('#BillingNewAddress_CountryId')
    }
    xyz(){
        return $('')
    }
    getCity(){
        return $('#BillingNewAddress_City')
    }
    getAddress1(){
        return $('#BillingNewAddress_Address1')
    }
    getAddress2(){
        return $('#BillingNewAddress_Address2')
    }
    getZipCode(){
        return $('#BillingNewAddress_ZipPostalCode')
    }
    GetPhoneNumber(){
        return $('#BillingNewAddress_PhoneNumber')
    }
    getContinueButton1(){
        return $('#billing-buttons-container [name="save"]')
    }
    getShippingMethod(){
        return $('#shippingoption_1') //from 0-1-2
    }
    
    getContinueButton2(){
        return $('.button-1.shipping-method-next-step-button')
    }
    getPaymentMethod(){
        return $('#paymentmethod_0')
    }
    getContinueButton3(){
        return $('.button-1.payment-method-next-step-button')
    }
    getContinueButton4(){
        return $('.button-1.payment-info-next-step-button')
    }
    getConfirmButton(){
        return $('.button-1.confirm-order-next-step-button')
    }
    getSuccessfulOrder(){
        return $('//strong')
    }

    getContinueBTN(){
        return $("//button[text()='Continue']")
    }


    getDeleteButton(){
        return $('#delete-billing-address-button')
    }

    getContinueButtonAfterDelete(){
        return $('//*[@id="billing-buttons-container"]/button[4]')
    }


}