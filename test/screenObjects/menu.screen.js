class MenuScreen {
   constructor(){
    this.leftMenuButton = '~open menu'
    this.login = "//android.widget.TextView[@text='Log In']"
   
   }

   async accessLoginScreen(){
    await $(this.leftMenuButton).click()
    await $(this.login).click()
  

   }
}
export default new MenuScreen()