class CheckoutScreen {
    constructor(){

       this.choiceProduct = "//android.view.ViewGroup[@content-desc='store item'][1]/android.view.ViewGroup[1]/android.widget.ImageView"
       this.addCar = "~Add To Cart button"
       this.checkCar = "//android.view.ViewGroup[@content-desc='cart badge']/android.widget.ImageView"
       this.processCheckout = "~Proceed To Checkout button"

       this.fullName = "~Full Name* input field"
       this.addressLine = "~Address Line 1* input field"
       this.addressLine2 = "~Address Line 2 input field"
       this.city = "~City* input field"
       this.stateRegion = "~State/Region input field"
       this.zipCode = "~Zip Code* input field"
       this.country = "~Country* input field"
       this.payment = "~To Payment button"

       this.fullNameWrong = "~Full Name*-error-message"
       this.addressLineWrong = "~Address Line 1*-error-message"
       this.cityWrong = "~City*-error-message"
       this.zipCodeWrong = "~Zip Code*-error-message"
       this.countryWrong = "//*[@text='Please provide your country.'"

       this.messageMethod = "//android.widget.TextView[@text='Enter a payment method']"
       this.fullNamePayment ="~Full Name* input field"
       this.numberCard = "~Card Number* input field"
        this.expireData = "~Expiration Date* input field"      
       this.codeSecurity = "~Security Code* input field"
       this.checckbox = "//android.view.ViewGroup[@content-desc='checkbox for My billing address is the same as my shipping address.']/android.view.ViewGroup/android.widget.ImageView"
        this.buttonOrder = "~Review Order button"
       this.placeButton = "~Place Order button"
       this.completeMessage ="//android.widget.TextView[@text='Checkout Complete']"
    }

   async fillFieldCheckout(fullname,addressline,addressline2,city,state,zipcode,country){
        
        await $(this.choiceProduct).click()
        await $(this.addCar).click()
        await $(this.checkCar).click()
        await $(this.processCheckout).click()

        await $(this.fullName).setValue(fullname)
        await $(this.addressLine).setValue(addressline)
        await $(this.addressLine2).setValue(addressline2)
        await $(this.city ).setValue(city)
        await $(this.stateRegion).setValue(state)
        await $(this.zipCode).setValue(zipcode)
        await $(this.country).setValue(country)
        await $(this.payment).click()
    }

    async choiceMethodPayment(fullnamecard,cardnumber,expiredata,code){
        await $(this.fullNamePayment).setValue(fullnamecard)
        await $(this.numberCard).setValue(cardnumber)
        await $(this.expireData).setValue(expiredata)
        await $(this.codeSecurity).setValue(code)
        await $(this.buttonOrder).click()
    }

}
export default new CheckoutScreen()