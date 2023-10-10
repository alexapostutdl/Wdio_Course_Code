export class ShoppingCartPage{

    getComputers(){
        return $('.top-menu.notmobile li:first-child')
    }

    getDesktopCategory(){
        return $('.title [title="Show products in category Desktops"]')
    }

    getProduct(){
        return $('[data-productid="2"]')
    }
    getAddToCartButton(){
        return $('.button-1.add-to-cart-button')
    }
    getShoppingCart(){
        return $("//a[text()='shopping cart']")
    }
    getEmptyCart(){
        return $('.no-data')
    }
    getItemQuantity(){
        return $('.qty-input')
    }
    getUpdateCart(){
        return $('.common-buttons #updatecart')
    }
    getTermsOfService(){
        return $('.terms-of-service #termsofservice')
    }
    getCheckout(){
        return $('.checkout-buttons #checkout')
    }
    xyz(){
        return $('')
    }
    xyz(){
        return $('')
    }
    xyz(){
        return $('')
    }
    xyz(){
        return $('')
    }
    xyz(){
        return $('')
    }
}