import { pages } from "../support/pages";
import { data } from "../support/data";
import { faker } from "@faker-js/faker";

export class ShoppingCartTest{

    async openDesktopCategory(){
        await pages.shoppingCartPage.getComputers().click()
        await pages.shoppingCartPage.getDesktopCategory().click()
    }

    async addItemToCart(){
        await pages.shoppingCartPage.getProduct().click()
        await pages.shoppingCartPage.getAddToCartButton().click()
    }

    async openShoppingCart(){
        await pages.shoppingCartPage.getShoppingCart().click()

        const element = await pages.shoppingCartPage.getEmptyCart();
        await element.waitForDisplayed({ reverse: true });
    }

    async updateCart(){
        await pages.shoppingCartPage.getItemQuantity().clearValue()
        await pages.shoppingCartPage.getItemQuantity().setValue('2')
        await pages.shoppingCartPage.getUpdateCart().click()
        await pages.shoppingCartPage.getTermsOfService().click()
        await pages.shoppingCartPage.getCheckout().click()
    }

    async userChecksOut(){
        const delete_button = await pages.checkoutPage.getDeleteButton()

        console.log(await delete_button.isDisplayed())
        if( await delete_button.isDisplayed() === true ){
            await pages.checkoutPage.getContinueButtonAfterDelete().click()
            await browser.pause(5000)
        }else{
            console.log(data.randomUserData.randomUser.country)
            await browser.pause(3000)
            await pages.checkoutPage.getCountry().click()
            await pages.checkoutPage.getCountry().selectByVisibleText(data.randomUserData.randomUser.country)
            await pages.checkoutPage.getCity().setValue(data.randomUserData.randomUser.city)
            await pages.checkoutPage.getAddress1().setValue(data.randomUserData.randomUser.address)
            await pages.checkoutPage.getAddress2().setValue(data.randomUserData.randomUser.address)
            await pages.checkoutPage.getZipCode().setValue(data.randomUserData.randomUser.zipCode)
            await pages.checkoutPage.GetPhoneNumber().setValue(data.randomUserData.randomUser.phoneNumber)
            await pages.checkoutPage.getContinueButton1().click()
        }

        await pages.checkoutPage.getShippingMethod('1').click()
        await pages.checkoutPage.getContinueButton2().click()
        await browser.pause(3000)
        await pages.checkoutPage.getContinueButton3().click()
        await browser.pause(3000)
        await pages.checkoutPage.getContinueButton4().click()
        await browser.pause(3000)
        await pages.checkoutPage.getConfirmButton().click()

        const successfull_message = pages.checkoutPage.getSuccessfulOrder()
        console.log(await successfull_message.getText())

        await expect(pages.checkoutPage.getSuccessfulOrder()).toHaveText('Your order has been successfully processed!')
        console.log('@@@@@@@@@@')
        console.log(await successfull_message.getText())

    }

}