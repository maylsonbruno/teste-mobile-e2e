import userData from '../data/userData.json' with {type:"json"}
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screenObjects/menu.screen'
import Login from '../screenObjects/login.screen'
import CheckoutScreen from '../screenObjects/checkoutscreen'


describe('My Login application', () => {
    it('should login with invalid credentials', async () => {

        await MenuScreen.accessLoginScreen()
        await Login.accessLogin(userData.userFail.username,userData.userFail.password)

        //Always this expect in the spec
        await expect($("//android.view.ViewGroup[@content-desc='generic-error-message']/android.widget.TextView")).toHaveText('Provided credentials do not match any user in this service.')
       
    })

    it.only('shoul login with data valid',async() =>{

        await MenuScreen.accessLoginScreen()
        await Login.accessLogin(userData.userSucess.username,userData.userSucess.password)
        await CheckoutScreen.fillFieldCheckout('testeCheckout','vera cruz','petronio portela','sao luis','maranhao','90520300','Brazil')
        await CheckoutScreen.choiceMethodPayment('teste name','12234445455','03/26','856')
       
    })
})

